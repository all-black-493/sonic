import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './GenerationWhereUniqueInput.schema';
import { GenerationUpdateWithoutVoiceInputObjectSchema as GenerationUpdateWithoutVoiceInputObjectSchema } from './GenerationUpdateWithoutVoiceInput.schema';
import { GenerationUncheckedUpdateWithoutVoiceInputObjectSchema as GenerationUncheckedUpdateWithoutVoiceInputObjectSchema } from './GenerationUncheckedUpdateWithoutVoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GenerationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GenerationUpdateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedUpdateWithoutVoiceInputObjectSchema)])
}).strict();
export const GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectSchema: z.ZodType<Prisma.GenerationUpdateWithWhereUniqueWithoutVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationUpdateWithWhereUniqueWithoutVoiceInput>;
export const GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectZodSchema = makeSchema();
