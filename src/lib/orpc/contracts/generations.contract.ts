import { createGenerationInputSchema, createGenerationOutputSchema, getAllGenerationsOutputSchema, getGenerationByIDInputSchema, getGenerationByIdOutputSchema } from "../schemas";
import { base } from "./base";

export const getGenerationById = base
    .input(getGenerationByIDInputSchema)
    .output(getGenerationByIdOutputSchema)

export const getAllGenerations = base
    .output(getAllGenerationsOutputSchema)

export const createGeneration = base
    .input(createGenerationInputSchema)
    .output(createGenerationOutputSchema)