import { z } from "zod";

export const getAllVoicesInputSchema = z.object({
    query: z.string().trim().optional()
}).optional()

export const getAllVoicesOutputSchema = z.object({
    custom: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string().nullable(),
            category: z.string(),
            language: z.string(),
            variant: z.string()
        })
    ),
    system: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string().nullable(),
            category: z.string(),
            language: z.string(),
            variant: z.string()
        })
    )
})

export const deleteVoiceInputSchema = z.object({ id: z.string() })

export const deleteVoiceOutputSchema = z.object({
    success: z.boolean(),
})