"use client"

import { SettingsPanel } from "@/features/text-to-speech/components/settings-panel"
import { AudioInputPanel } from "../components/audio-input-panel"
import { TextOutputPlaceholder } from "../components/text-output-placeholder"
import { SpeechToTextForm, defaultSTTValues } from "../components/speech-to-text-form"

export function SpeechToTextView() {
    return (
        <SpeechToTextForm defaultValues={defaultSTTValues}>
            <div className="flex min-h-0 flex-1 overflow-hidden">
                <div className="flex min-h-0 flex-1 flex-col">
                    <AudioInputPanel />
                    <TextOutputPlaceholder />
                </div>

                <SettingsPanel mode="stt" />
            </div>
        </SpeechToTextForm>
    )
}