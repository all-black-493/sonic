"use client"

import { SettingsPanel } from "../components/settings-panel";
import { TextInputPanel } from "../components/text-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
import { TextToSpeechForm, defaultTTSValues, type TTSFormValues } from "../components/text-to-speech-form";
import { TTSVoicesProvider } from "../contexts/tts-voices-context";
import { useSuspenseQuery } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc/orpc.tanstack";

export function TextToSpeechView({ initialValues }: { initialValues?: Partial<TTSFormValues> }) {

    const { data: voices } = useSuspenseQuery(orpc.voicesRouter.getAll.queryOptions())

    const { custom: customVoices, system: systemVoices } = voices

    const allVoices = [...customVoices, ...systemVoices]

    const fallbackVoiceId = allVoices[0]?.id ?? ""

    const resolvedVoiceId = initialValues?.voiceId && allVoices.some((v) => v.id === initialValues.voiceId) ? initialValues.voiceId : fallbackVoiceId

    const defaultValues: TTSFormValues = {
        ...defaultTTSValues,
        ...initialValues,
        voiceId: resolvedVoiceId
    }

    return (
        <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
            <TextToSpeechForm defaultValues={defaultValues}>
                <div className="flex min-h-0 flex-1 overflow-hidden">
                    <div className="flex min-h-0 flex-1 flex-col">
                        <TextInputPanel />
                        <VoicePreviewPlaceholder />
                    </div>
                    <SettingsPanel mode="tts" />
                </div>
            </TextToSpeechForm>
        </TTSVoicesProvider>
    )
}

