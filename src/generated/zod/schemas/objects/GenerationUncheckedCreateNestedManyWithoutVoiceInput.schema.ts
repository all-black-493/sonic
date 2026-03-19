import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationCreateWithoutVoiceInputObjectSchema as GenerationCreateWithoutVoiceInputObjectSchema } from './GenerationCreateWithoutVoiceInput.schema';
import { GenerationUncheckedCreateWithoutVoiceInputObjectSchema as GenerationUncheckedCreateWithoutVoiceInputObjectSchema } from './GenerationUncheckedCreateWithoutVoiceInput.schema';
import { GenerationCreateOrConnectWithoutVoiceInputObjectSchema as GenerationCreateOrConnectWithoutVoiceInputObjectSchema } from './GenerationCreateOrConnectWithoutVoiceInput.schema';
import { GenerationCreateManyVoiceInputEnvelopeObjectSchema as GenerationCreateManyVoiceInputEnvelopeObjectSchema } from './GenerationCreateManyVoiceInputEnvelope.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './GenerationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema).array(), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GenerationCreateOrConnectWithoutVoiceInputObjectSchema), z.lazy(() => GenerationCreateOrConnectWithoutVoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GenerationCreateManyVoiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GenerationWhereUniqueInputObjectSchema), z.lazy(() => GenerationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GenerationUncheckedCreateNestedManyWithoutVoiceInputObjectSchema: z.ZodType<Prisma.GenerationUncheckedCreateNestedManyWithoutVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationUncheckedCreateNestedManyWithoutVoiceInput>;
export const GenerationUncheckedCreateNestedManyWithoutVoiceInputObjectZodSchema = makeSchema();
