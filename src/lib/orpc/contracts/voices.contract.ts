import { deleteVoiceInputSchema, deleteVoiceOutputSchema, getAllVoicesInputSchema, getAllVoicesOutputSchema, getGenerationByIDInputSchema } from "../schemas";
import { base } from "./base";

export const getAllVoices = base
    .input(getAllVoicesInputSchema)
    .output(getAllVoicesOutputSchema)

export const deleteVoice = base
    .input(deleteVoiceInputSchema)
    .output(deleteVoiceOutputSchema)

