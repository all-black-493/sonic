import { getQueryClient, HydrateClient } from '@/lib/query/hydration'
import { orpc } from '@/lib/orpc/orpc.tanstack'
import { HealthCheck } from './_client'
import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"

export default async function TestPage() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery(orpc.health.queryOptions())


    return (
        <HydrateClient client={queryClient}>
            <div className="flex flex-col items-center justify-center gap-4 p-8">
                <h1 className="text-2xl font-bold">
                    oRPC Test Page
                </h1>
                <ErrorBoundary fallback={<div>Something went wrong ...</div>}>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <HealthCheck />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </HydrateClient>
    )
}

