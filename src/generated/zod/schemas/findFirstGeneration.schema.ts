import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationOrderByWithRelationInputObjectSchema as GenerationOrderByWithRelationInputObjectSchema } from './objects/GenerationOrderByWithRelationInput.schema';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './objects/GenerationWhereInput.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';
import { GenerationScalarFieldEnumSchema } from './enums/GenerationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GenerationFindFirstSelectSchema: z.ZodType<Prisma.GenerationSelect> = z.object({
    id: z.boolean().optional(),
    orgId: z.boolean().optional(),
    voiceId: z.boolean().optional(),
    voice: z.boolean().optional(),
    voiceName: z.boolean().optional(),
    text: z.boolean().optional(),
    r2ObjectKey: z.boolean().optional(),
    temperature: z.boolean().optional(),
    topP: z.boolean().optional(),
    topK: z.boolean().optional(),
    repetitionPenalty: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GenerationSelect>;

export const GenerationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    orgId: z.boolean().optional(),
    voiceId: z.boolean().optional(),
    voice: z.boolean().optional(),
    voiceName: z.boolean().optional(),
    text: z.boolean().optional(),
    r2ObjectKey: z.boolean().optional(),
    temperature: z.boolean().optional(),
    topP: z.boolean().optional(),
    topK: z.boolean().optional(),
    repetitionPenalty: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const GenerationFindFirstSchema: z.ZodType<Prisma.GenerationFindFirstArgs> = z.object({ select: GenerationFindFirstSelectSchema.optional(), include: z.lazy(() => GenerationIncludeObjectSchema.optional()), orderBy: z.union([GenerationOrderByWithRelationInputObjectSchema, GenerationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GenerationWhereInputObjectSchema.optional(), cursor: GenerationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GenerationScalarFieldEnumSchema, GenerationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GenerationFindFirstArgs>;

export const GenerationFindFirstZodSchema = z.object({ select: GenerationFindFirstSelectSchema.optional(), include: z.lazy(() => GenerationIncludeObjectSchema.optional()), orderBy: z.union([GenerationOrderByWithRelationInputObjectSchema, GenerationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GenerationWhereInputObjectSchema.optional(), cursor: GenerationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GenerationScalarFieldEnumSchema, GenerationScalarFieldEnumSchema.array()]).optional() }).strict();