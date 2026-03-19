import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './GenerationWhereUniqueInput.schema';
import { GenerationCreateWithoutVoiceInputObjectSchema as GenerationCreateWithoutVoiceInputObjectSchema } from './GenerationCreateWithoutVoiceInput.schema';
import { GenerationUncheckedCreateWithoutVoiceInputObjectSchema as GenerationUncheckedCreateWithoutVoiceInputObjectSchema } from './GenerationUncheckedCreateWithoutVoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GenerationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema)])
}).strict();
export const GenerationCreateOrConnectWithoutVoiceInputObjectSchema: z.ZodType<Prisma.GenerationCreateOrConnectWithoutVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationCreateOrConnectWithoutVoiceInput>;
export const GenerationCreateOrConnectWithoutVoiceInputObjectZodSchema = makeSchema();
