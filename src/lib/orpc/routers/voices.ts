import { implement } from "@orpc/server";
import { contract } from "../contracts";
import { prisma } from "@/lib/db";
import { orgMiddleware } from "../middleware";
import { deleteAudio } from "@/lib/r2";

const os = implement(contract)

export const getAll = os.voicesRouter.getAll.use(orgMiddleware).handler(async ({ input, errors, context }) => {
    const searchFilter = input?.query
        ? {
            OR: [
                {
                    name: {
                        contains: input.query,
                        mode: "insensitive" as const
                    }
                },
                {
                    description: {
                        contains: input.query,
                        mode: "insensitive" as const
                    }
                }
            ]
        }
        : {};

    const [custom, system] = await Promise.all([
        prisma.voice.findMany({
            where: {
                variant: "CUSTOM",
                orgId: context.orgId,
                ...searchFilter
            },
            orderBy: {
                createdAt: "desc"
            },
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                language: true,
                variant: true
            }
        }),
        prisma.voice.findMany({
            where: {
                variant: "SYSTEM",
                ...searchFilter,
            },
            orderBy: { name: "asc" },
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                language: true,
                variant: true
            }
        })
    ])

    return { custom, system }
})

export const deleteVoice = os.voicesRouter.deleteVoice.use(orgMiddleware).handler(async ({ input, errors, context }) => {
    const voice = await prisma.voice.findUnique({
        where: {
            id: input.id,
            variant: "CUSTOM",
            orgId: context.orgId
        },
        select: {
            id: true,
            r2ObjectKey: true
        }
    })

    if (!voice) {
        throw errors.NOT_FOUND({
            data: {
                resourceId: input.id,
                resourceType: "Audio"
            },
            message: "Voice not found"
        })
    }

    await prisma.voice.delete({ where: { id: voice.id } })

    if (voice.r2ObjectKey) {
        await deleteAudio(voice.r2ObjectKey).catch(() => { })
    }

    return { success: true }
})