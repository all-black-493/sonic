import * as z from 'zod';
import { VoiceCategorySchema } from '../../enums/VoiceCategory.schema';
import { VoiceVariantSchema } from '../../enums/VoiceVariant.schema';
// prettier-ignore
export const VoiceInputSchema = z.object({
    id: z.string(),
    orgId: z.string().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    category: VoiceCategorySchema,
    language: z.string(),
    variant: VoiceVariantSchema,
    r2ObjectKey: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    generations: z.array(z.unknown())
}).strict();

export type VoiceInputType = z.infer<typeof VoiceInputSchema>;
