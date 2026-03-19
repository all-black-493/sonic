"use client"

import { orpc } from "@/lib/orpc/orpc.tanstack";
import { useSuspenseQueries } from "@tanstack/react-query";
import { SettingsPanel } from "../components/settings-panel";
import { TextInputPanel } from "../components/text-input-panel";
import { TextToSpeechForm, type TTSFormValues } from "../components/text-to-speech-form";
import { VoicePreviewPanel } from "../components/voice-preview-panel";
import { TTSVoicesProvider } from "../contexts/tts-voices-context";
import { VoicePreviewMobile } from "../components/voice-preview-mobile";

export function TextToSpeechDetailView({ generationId }: { generationId: string }) {

    const [
        generationQuery,
        voicesQuery
    ] = useSuspenseQueries({
        queries: [
            orpc.generationsRouter.getGenerationById.queryOptions({
                input: {
                    id: generationId
                }
            }),
            orpc.voicesRouter.getAll.queryOptions()
        ]
    })

    const data = generationQuery.data

    const { custom: customVoices, system: systemVoices } = voicesQuery.data

    const allVoices = [...customVoices, ...systemVoices]

    const fallbackVoiceId = allVoices[0]?.id ?? ""

    const resolvedVoiceId = data?.voiceId &&
        allVoices.some((v) => v.id === data.voiceId)
        ? data.voiceId
        : fallbackVoiceId

    const defaultValues: TTSFormValues = {
        text: data.text,
        voiceId: resolvedVoiceId,
        temperature: data.temperature,
        topP: data.topP,
        topK: data.topK,
        repetitionPenalty: data.repetitionPenalty
    }

    const generationVoice = {
        id: data.voiceId ?? undefined,
        name: data.voiceName
    }

    return (
        <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
            <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
                <div className="flex min-h-0 flex-1 overflow-hidden">
                    <div className="flex min-h-0 flex-1 flex-col">
                        <TextInputPanel />
                        <VoicePreviewMobile
                            audioUrl={data.audioUrl}
                            voice={generationVoice}
                            text={data.text}
                        />
                        <VoicePreviewPanel
                            audioUrl={data.audioUrl}
                            voice={generationVoice}
                            text={data.text}
                        />
                    </div>
                    <SettingsPanel mode="tts" />
                </div>
            </TextToSpeechForm>
        </TTSVoicesProvider>
    )
}

