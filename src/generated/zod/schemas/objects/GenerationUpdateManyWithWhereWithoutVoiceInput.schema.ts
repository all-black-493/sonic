import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationScalarWhereInputObjectSchema as GenerationScalarWhereInputObjectSchema } from './GenerationScalarWhereInput.schema';
import { GenerationUpdateManyMutationInputObjectSchema as GenerationUpdateManyMutationInputObjectSchema } from './GenerationUpdateManyMutationInput.schema';
import { GenerationUncheckedUpdateManyWithoutVoiceInputObjectSchema as GenerationUncheckedUpdateManyWithoutVoiceInputObjectSchema } from './GenerationUncheckedUpdateManyWithoutVoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GenerationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GenerationUpdateManyMutationInputObjectSchema), z.lazy(() => GenerationUncheckedUpdateManyWithoutVoiceInputObjectSchema)])
}).strict();
export const GenerationUpdateManyWithWhereWithoutVoiceInputObjectSchema: z.ZodType<Prisma.GenerationUpdateManyWithWhereWithoutVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationUpdateManyWithWhereWithoutVoiceInput>;
export const GenerationUpdateManyWithWhereWithoutVoiceInputObjectZodSchema = makeSchema();
