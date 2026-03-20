import { chatterbox } from "@/lib/chatterbox-client";
import { prisma } from "@/lib/db";
import { uploadAudio } from "@/lib/r2";
import { orgProcedure } from "./base";
import * as Sentry from "@sentry/nextjs"


export const getById = orgProcedure.generationsRouter.getGenerationById.handler(async ({ input, context, errors }) => {
    const generation = await prisma.generation.findUnique({
        where: {
            id: input.id,
            orgId: context.orgId
        },
        omit: {
            orgId: true,
            r2ObjectKey: true
        }
    })

    if (!generation) {
        throw errors.NOT_FOUND
    }

    return {
        ...generation,
        audioUrl: `/api/audio/${generation.id}`
    }
})

export const getAllGenerations = orgProcedure.generationsRouter.getAllGenerations.handler(async ({ context }) => {
    const generations = await prisma.generation.findMany({
        where: { orgId: context.orgId },
        orderBy: { createdAt: "desc" },
        omit: {
            orgId: true,
            r2ObjectKey: true
        }
    })
    return generations
})

export const createGeneration = orgProcedure.generationsRouter.createGeneration.handler(async ({ input, context, errors }) => {
    const voice = await prisma.voice.findUnique({
        where: {
            id: input.voiceId,
            OR: [
                { variant: "SYSTEM" },
                { variant: "CUSTOM", orgId: context.orgId }
            ]
        },
        select: {
            id: true,
            name: true,
            r2ObjectKey: true
        }
    })

    if (!voice) {
        throw errors.NOT_FOUND({
            data: {
                resourceId: input.voiceId,
                resourceType: "audio"
            },
            message: "Voice not found"
        })
    }

    if (!voice.r2ObjectKey) {
        throw errors.DOMAIN_RULE_VIOLATION({
            message: "Voice audio is not available for generation use",
            cause: "This voice is not in storage",
            data: {
                rule: "Voice must exist in storage"
            }
        })
    }

    const { data, error } = await chatterbox.POST("/generate", {
        body: {
            prompt: input.text,
            voice_key: voice.r2ObjectKey,
            temperature: input.temperature,
            top_p: input.topP,
            top_k: input.topK,
            repetition_penalty: input.repetitionPenalty,
            norm_loudness: true
        },
        parseAs: "arrayBuffer"
    })

    Sentry.logger.info("Generation started", {
        orgId: context.orgId,
        voiceId: input.voiceId,
        textLength: input.text.length
    })

    if (error) {
        throw errors.AUDIO_GENERATION_FAILED({
            data: {
                provider: "chatterbox"
            }
        })
    }

    if (!(data instanceof ArrayBuffer)) {
        throw errors.AUDIO_GENERATION_FAILED({
            data: {
                provider: "chatterbox",
            },
            cause: "Invalid audio response"

        })
    }

    const buffer = Buffer.from(data)

    let generationId: string | null = null
    let r2ObjectKey: string | null = null

    try {
        const generation = await prisma.generation.create({
            data: {
                orgId: context.orgId,
                text: input.text,
                voiceName: voice.name,
                voiceId: voice.id,
                temperature: input.temperature,
                topP: input.topP,
                topK: input.topK,
                repetitionPenalty: input.repetitionPenalty
            },
            select: {
                id: true
            }
        })

        generationId = generation.id
        r2ObjectKey = `generations/orgs/${context.orgId}/${generation.id}`

        await uploadAudio({ buffer, key: r2ObjectKey })

        await prisma.generation.update({
            where: {
                id: generation.id
            },
            data: {
                r2ObjectKey
            }
        })

        Sentry.logger.info("Audio Generated",
            {
                orgId: context.orgId,
                generationId: generation.id
            }
        )
    } catch {
        if (generationId) {
            await prisma.generation.delete({
                where: {
                    id: generationId
                }
            }).catch(() => {

            })
        }

        Sentry.logger.error(
            "Generation failed",
            {
                orgId: context.orgId,
                voiceId: input.voiceId,
            }
        )

        throw errors.INTERNAL_SERVER_ERROR({
            message: "Failed to store generated audio "
        })

    }

    if (!generationId || !r2ObjectKey) {
        throw errors.INTERNAL_SERVER_ERROR({
            message: "Failed to store generated audio"
        })
    }

    return {
        id: generationId
    }


})