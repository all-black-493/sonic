import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationCreateWithoutVoiceInputObjectSchema as GenerationCreateWithoutVoiceInputObjectSchema } from './GenerationCreateWithoutVoiceInput.schema';
import { GenerationUncheckedCreateWithoutVoiceInputObjectSchema as GenerationUncheckedCreateWithoutVoiceInputObjectSchema } from './GenerationUncheckedCreateWithoutVoiceInput.schema';
import { GenerationCreateOrConnectWithoutVoiceInputObjectSchema as GenerationCreateOrConnectWithoutVoiceInputObjectSchema } from './GenerationCreateOrConnectWithoutVoiceInput.schema';
import { GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectSchema as GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectSchema } from './GenerationUpsertWithWhereUniqueWithoutVoiceInput.schema';
import { GenerationCreateManyVoiceInputEnvelopeObjectSchema as GenerationCreateManyVoiceInputEnvelopeObjectSchema } from './GenerationCreateManyVoiceInputEnvelope.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './GenerationWhereUniqueInput.schema';
import { GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectSchema as GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectSchema } from './GenerationUpdateWithWhereUniqueWithoutVoiceInput.schema';
import { GenerationUpdateManyWithWhereWithoutVoiceInputObjectSchema as GenerationUpdateManyWithWhereWithoutVoiceInputObjectSchema } from './GenerationUpdateManyWithWhereWithoutVoiceInput.schema';
import { GenerationScalarWhereInputObjectSchema as GenerationScalarWhereInputObjectSchema } from './GenerationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationCreateWithoutVoiceInputObjectSchema).array(), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUncheckedCreateWithoutVoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GenerationCreateOrConnectWithoutVoiceInputObjectSchema), z.lazy(() => GenerationCreateOrConnectWithoutVoiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUpsertWithWhereUniqueWithoutVoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GenerationCreateManyVoiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GenerationWhereUniqueInputObjectSchema), z.lazy(() => GenerationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GenerationWhereUniqueInputObjectSchema), z.lazy(() => GenerationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GenerationWhereUniqueInputObjectSchema), z.lazy(() => GenerationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GenerationWhereUniqueInputObjectSchema), z.lazy(() => GenerationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUpdateWithWhereUniqueWithoutVoiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GenerationUpdateManyWithWhereWithoutVoiceInputObjectSchema), z.lazy(() => GenerationUpdateManyWithWhereWithoutVoiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GenerationScalarWhereInputObjectSchema), z.lazy(() => GenerationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GenerationUpdateManyWithoutVoiceNestedInputObjectSchema: z.ZodType<Prisma.GenerationUpdateManyWithoutVoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationUpdateManyWithoutVoiceNestedInput>;
export const GenerationUpdateManyWithoutVoiceNestedInputObjectZodSchema = makeSchema();
