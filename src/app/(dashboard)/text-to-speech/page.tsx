import { TextToSpeechView } from '@/features/text-to-speech/views/text-to-speech-view'
import type { Metadata } from 'next'
import { getQueryClient, HydrateClient } from '@/lib/query/hydration'
import { orpc } from '@/lib/orpc/orpc.tanstack'
import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"

export const metadata: Metadata = { title: "Text to Speech" }

async function TextToSpeechPage({ searchParams }: { searchParams: Promise<{ text?: string; voiceId?: string; }> }) {

    const { text, voiceId } = await searchParams

    const queryClient = getQueryClient()

    await queryClient.prefetchQuery(orpc.voicesRouter.getAll.queryOptions())
    await queryClient.prefetchQuery(orpc.generationsRouter.getAllGenerations.queryOptions())

    return (
        <HydrateClient client={queryClient}>
            <TextToSpeechView initialValues={{ text, voiceId }} />
        </HydrateClient>
    )
}

export default TextToSpeechPage
