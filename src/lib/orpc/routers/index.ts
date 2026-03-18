import { implement } from "@orpc/server";
import { contract } from "../contracts";
import { getAll, deleteVoice } from "./voices";

const os = implement(contract);

export const router = os.router({
  voicesRouter: {
    getAll,
    deleteVoice,
  },
});