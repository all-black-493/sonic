import { TextToSpeechLayout } from '@/features/text-to-speech/views/text-to-speech-layout'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <TextToSpeechLayout>{children}</TextToSpeechLayout>
    )
}

export default Layout
