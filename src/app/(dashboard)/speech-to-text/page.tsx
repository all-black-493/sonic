import { SpeechToTextView } from '@/features/speech-to-text/views/speech-to-text-view'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: "Speech To Text" }

function SpeechToTextPage() {
    return (
        <SpeechToTextView />
    )
}

export default SpeechToTextPage
