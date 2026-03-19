import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationCreateInputObjectSchema as GenerationCreateInputObjectSchema } from './objects/GenerationCreateInput.schema';
import { GenerationUncheckedCreateInputObjectSchema as GenerationUncheckedCreateInputObjectSchema } from './objects/GenerationUncheckedCreateInput.schema';

export const GenerationCreateOneSchema: z.ZodType<Prisma.GenerationCreateArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), data: z.union([GenerationCreateInputObjectSchema, GenerationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GenerationCreateArgs>;

export const GenerationCreateOneZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), data: z.union([GenerationCreateInputObjectSchema, GenerationUncheckedCreateInputObjectSchema]) }).strict();