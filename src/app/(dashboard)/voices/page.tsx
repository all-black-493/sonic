import type { Metadata } from "next";
import type { SearchParams } from "nuqs/server";
import { getQueryClient, HydrateClient } from '@/lib/query/hydration'
import { orpc } from '@/lib/orpc/orpc.tanstack'

import { VoicesView } from "@/features/voices/views/voices-view";
import { voicesSearchParamsCache } from "@/features/voices/lib/params";


export const metadata: Metadata = { title: "Voices" }


export default async function VoicesPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { query } = await voicesSearchParamsCache.parse(searchParams);

    const queryClient = getQueryClient()

    await queryClient.prefetchQuery(orpc.voicesRouter.getAll.queryOptions({ input: { query } }))


    return (
        <HydrateClient client={queryClient}>
            <VoicesView />
        </HydrateClient>

    )
}