import * as z from 'zod';

export const VoiceVariantSchema = z.enum(['SYSTEM', 'CUSTOM'])

export type VoiceVariant = z.infer<typeof VoiceVariantSchema>;