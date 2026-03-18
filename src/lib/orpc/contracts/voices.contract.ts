import { deleteVoiceInputSchema, deleteVoiceOutputSchema, getAllVoicesInputSchema, getAllVoicesOutputSchema } from "../schemas";
import { base } from "./base";

export const getAllVoices = base
    .input(getAllVoicesInputSchema)
    .output(getAllVoicesOutputSchema)

export const deleteVoice = base
    .input(deleteVoiceInputSchema)
    .output(deleteVoiceOutputSchema)