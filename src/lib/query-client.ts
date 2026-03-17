import { defaultShouldDehydrateQuery, QueryClient } from '@tanstack/react-query'
import { StandardRPCJsonSerializer } from '@orpc/client/standard'

const serializer = new StandardRPCJsonSerializer({
    customJsonSerializers: [
        // put custom serializers here
    ]
})

export function createQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                queryKeyHashFn(queryKey) {
                    const [json, meta] = serializer.serialize(queryKey)
                    return JSON.stringify({ json, meta })
                },
                staleTime: 30 * 1000,
            },
            dehydrate: {
                shouldDehydrateQuery: (query) =>
                    defaultShouldDehydrateQuery(query) || query.state.status === "pending",
                serializeData(data) {
                    const [json, meta] = serializer.serialize(data)
                    return { json, meta }
                },
            },
            hydrate: {
                deserializeData(data) {
                    return serializer.deserialize(data.json, data.meta)
                }
            },
        }
    })
}