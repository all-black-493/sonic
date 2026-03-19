import * as z from 'zod';

export const VoiceScalarFieldEnumSchema = z.enum(['id', 'orgId', 'name', 'description', 'category', 'language', 'variant', 'r2ObjectKey', 'createdAt', 'updatedAt'])

export type VoiceScalarFieldEnum = z.infer<typeof VoiceScalarFieldEnumSchema>;