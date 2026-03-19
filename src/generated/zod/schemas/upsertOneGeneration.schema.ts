import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';
import { GenerationCreateInputObjectSchema as GenerationCreateInputObjectSchema } from './objects/GenerationCreateInput.schema';
import { GenerationUncheckedCreateInputObjectSchema as GenerationUncheckedCreateInputObjectSchema } from './objects/GenerationUncheckedCreateInput.schema';
import { GenerationUpdateInputObjectSchema as GenerationUpdateInputObjectSchema } from './objects/GenerationUpdateInput.schema';
import { GenerationUncheckedUpdateInputObjectSchema as GenerationUncheckedUpdateInputObjectSchema } from './objects/GenerationUncheckedUpdateInput.schema';

export const GenerationUpsertOneSchema: z.ZodType<Prisma.GenerationUpsertArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema, create: z.union([ GenerationCreateInputObjectSchema, GenerationUncheckedCreateInputObjectSchema ]), update: z.union([ GenerationUpdateInputObjectSchema, GenerationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GenerationUpsertArgs>;

export const GenerationUpsertOneZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema, create: z.union([ GenerationCreateInputObjectSchema, GenerationUncheckedCreateInputObjectSchema ]), update: z.union([ GenerationUpdateInputObjectSchema, GenerationUncheckedUpdateInputObjectSchema ]) }).strict();