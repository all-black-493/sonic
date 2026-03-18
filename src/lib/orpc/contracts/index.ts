import { deleteVoice, getAllVoices } from "./voices.contract";

export const contract = {
    voicesRouter:{
        getAll: getAllVoices,
        deleteVoice: deleteVoice
    }
}