import { SpeechToTextLayout } from "@/features/speech-to-text/views/speech-to-text-layout"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SpeechToTextLayout>
            {children}
        </SpeechToTextLayout>
    )
}

export default Layout
