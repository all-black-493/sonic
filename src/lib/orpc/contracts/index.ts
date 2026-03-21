import { createCheckout, createPortalSession, getStatus } from "./billing.contract";
import { getAllGenerations, getGenerationById, createGeneration } from "./generations.contract";
import { deleteVoice, getAllVoices } from "./voices.contract";

export const contract = {
    voicesRouter: {
        getAll: getAllVoices,
        deleteVoice: deleteVoice
    },
    generationsRouter: {
        getGenerationById: getGenerationById,
        getAllGenerations: getAllGenerations,
        createGeneration: createGeneration
    },
    billingRouter:{
        createCheckout,
        createPortalSession,
        getStatus
    }
}