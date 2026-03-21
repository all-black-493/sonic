import { implement } from "@orpc/server";
import { contract } from "../contracts";
import { getAll, deleteVoice } from "./voices";
import { getAllGenerations, getById, createGeneration } from "./generations";
import { createCheckout,createPortalSession,getStatus } from "./billing";

const os = implement(contract);

export const router = os.router({
  voicesRouter: {
    getAll,
    deleteVoice,
  },
  generationsRouter: {
    getGenerationById: getById,
    getAllGenerations: getAllGenerations,
    createGeneration: createGeneration
  },
  billingRouter: {
    createCheckout,
    createPortalSession,
    getStatus
  }
});