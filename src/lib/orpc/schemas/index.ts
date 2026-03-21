import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";
import { z } from "zod";
import { GenerationModelSchema } from "@/generated/zod/schemas/variants/pure/Generation.pure"
import { VoiceModelSchema } from "@/generated/zod/schemas/variants/pure/Voice.pure"

const voiceSchema = VoiceModelSchema.omit({
  orgId: true,
  r2ObjectKey: true,
  createdAt: true,
  updatedAt: true,
  generations: true
})

export const getAllVoicesInputSchema = z.object({
  query: z.string().trim().optional()
}).optional()

export const getAllVoicesOutputSchema = z.object({
  custom: z.array(voiceSchema),
  system: z.array(voiceSchema)
})

export const deleteVoiceInputSchema = z.object({ id: z.string() })

export const deleteVoiceOutputSchema = z.object({
  success: z.boolean(),
})

export const getGenerationByIDInputSchema = z.object({
  id: z.string()
})

export const getGenerationByIdOutputSchema = GenerationModelSchema
  .omit({
    orgId: true,
    r2ObjectKey: true,
    voice: true
  })
  .extend({
    audioUrl: z.string()
  })

export const generationSchema = GenerationModelSchema.omit({
  orgId: true,
  r2ObjectKey: true,
  voice: true
})

export const getAllGenerationsOutputSchema = z.array(generationSchema)

export const createGenerationInputSchema = z.object({
  text: z.string().min(1).max(TEXT_MAX_LENGTH),
  voiceId: z.string().min(1),
  temperature: z.number().min(0).max(2).default(0.8),
  topP: z.number().min(0).max(1).default(0.95),
  topK: z.number().min(1).max(10000).default(1000),
  repetitionPenalty: z.number().min(1).max(2).default(1.2)
})

export const createGenerationOutputSchema = z.object({
  id: z.string()
})

export const createCheckoutOutputSchema = z.object({
  checkoutUrl: z.string()
})

export const createPortalSessionOutputSchema = z.object({
  portalUrl: z.string()
})

export const getStatusOutputSchema = z.object({
  hasActiveSubscription: z.boolean(),
  customerId: z.string().nullable(),
  estimatedCostCents: z.number()
})