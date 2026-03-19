import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './GenerationWhereUniqueInput.schema';
import { GenerationUpdateWithoutVoiceInputObjectSchema as GenerationUpdateWithoutVoiceInputObjectSchema } from './GenerationUpdateWithoutVoiceInput.schema';
import { GenerationUncheckedUpdateWithoutVoiceInputObjectSchema as GenerationUncheckedUpdateWithoutVoiceInputObjectSchema } from './GenerationUncheckedUpdateWithoutVoiceInput.schema';
import { GenerationCreateWithoutVoiceInputObjectSchema as GenerationCreateWithoutVoiceInputObjectSchema } from './GenerationCreateWithoutVoiceInput.schema';
import { GenerationUncheckedCreateWithoutVoiceInputObjectSchema as GenerationUncheckedCreateWithoutVoiceInputObjectSchema } from './GenerationUncheckedCreateWithoutVoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GenerationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GenerationUpdateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedUpdateWithoutVoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema)])
}).strict();
export const GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectSchema: z.ZodType<Prisma.GenerationUpsertWithWhereUniqueWithoutVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationUpsertWithWhereUniqueWithoutVoiceInput>;
export const GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectZodSchema = makeSchema();
