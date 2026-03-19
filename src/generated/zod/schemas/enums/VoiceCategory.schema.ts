import * as z from 'zod';

export const VoiceCategorySchema = z.enum(['AUDIOBOOK', 'CONVERSATIONAL', 'CUSTOMER_SERVICE', 'GENERAL', 'NARRATIVE', 'CHARACTERS', 'MEDITATION', 'MOTIVATIONAL', 'PODCAST', 'ADVERTISING', 'VOICEOVER', 'CORPORATE'])

export type VoiceCategory = z.infer<typeof VoiceCategorySchema>;