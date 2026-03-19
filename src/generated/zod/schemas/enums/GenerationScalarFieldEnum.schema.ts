import * as z from 'zod';

export const GenerationScalarFieldEnumSchema = z.enum(['id', 'orgId', 'voiceId', 'voiceName', 'text', 'r2ObjectKey', 'temperature', 'topP', 'topK', 'repetitionPenalty', 'createdAt', 'updatedAt'])

export type GenerationScalarFieldEnum = z.infer<typeof GenerationScalarFieldEnumSchema>;