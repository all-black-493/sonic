import { createCheckoutOutputSchema, createPortalSessionOutputSchema, getStatusOutputSchema } from "../schemas";
import { base } from "./base";

export const createCheckout = base.output(createCheckoutOutputSchema)
export const createPortalSession = base.output(createPortalSessionOutputSchema)
export const getStatus = base.output(getStatusOutputSchema)