import { getQueryClient, HydrateClient } from '@/lib/query/hydration'
import { orpc } from '@/lib/orpc/orpc.tanstack'
import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import { TextToSpeechDetailView } from '@/features/text-to-speech/views/text-to-speech-detail-view'

export default async function TextToSpeechDetailPage({ params }: { params: Promise<{ generationId: string }> }) {
    const { generationId } = await params

    const queryClient = getQueryClient()

    await queryClient.prefetchQuery(orpc.generationsRouter.getGenerationById.queryOptions({ input: { id: generationId } }))
    await queryClient.prefetchQuery(orpc.voicesRouter.getAll.queryOptions())

    return (
        <HydrateClient client={queryClient}>
            <TextToSpeechDetailView generationId={generationId} />
        </HydrateClient>
    )

}