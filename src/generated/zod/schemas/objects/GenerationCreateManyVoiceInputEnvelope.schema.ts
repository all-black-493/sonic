import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationCreateManyVoiceInputObjectSchema as GenerationCreateManyVoiceInputObjectSchema } from './GenerationCreateManyVoiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GenerationCreateManyVoiceInputObjectSchema), z.lazy(() => GenerationCreateManyVoiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GenerationCreateManyVoiceInputEnvelopeObjectSchema: z.ZodType<Prisma.GenerationCreateManyVoiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GenerationCreateManyVoiceInputEnvelope>;
export const GenerationCreateManyVoiceInputEnvelopeObjectZodSchema = makeSchema();
