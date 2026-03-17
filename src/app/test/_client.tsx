'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { orpc } from '@/lib/orpc/orpc.tanstack'

export function HealthCheck() {
    const { data } = useSuspenseQuery(orpc.health.queryOptions())

    return (
        <div className="rounded-lg border p-6 text-center">
            <p className="text-muted-foreground text-sm">oRPC Status</p>
            <p className="mt-2 text-sm font-semibold">{data.status}</p>
        </div>
    )
}