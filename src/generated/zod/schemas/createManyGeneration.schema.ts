import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationCreateManyInputObjectSchema as GenerationCreateManyInputObjectSchema } from './objects/GenerationCreateManyInput.schema';

export const GenerationCreateManySchema: z.ZodType<Prisma.GenerationCreateManyArgs> = z.object({ data: z.union([ GenerationCreateManyInputObjectSchema, z.array(GenerationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GenerationCreateManyArgs>;

export const GenerationCreateManyZodSchema = z.object({ data: z.union([ GenerationCreateManyInputObjectSchema, z.array(GenerationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();