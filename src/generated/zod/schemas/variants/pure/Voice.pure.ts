import * as z from 'zod';
import { VoiceCategorySchema } from '../../enums/VoiceCategory.schema';
import { VoiceVariantSchema } from '../../enums/VoiceVariant.schema';
// prettier-ignore
export const VoiceModelSchema = z.object({
    id: z.string(),
    orgId: z.string().nullable(),
    name: z.string(),
    description: z.string().nullable(),
    category: VoiceCategorySchema,
    language: z.string(),
    variant: VoiceVariantSchema,
    r2ObjectKey: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    generations: z.array(z.unknown())
}).strict();

export type VoicePureType = z.infer<typeof VoiceModelSchema>;
