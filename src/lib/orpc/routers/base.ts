import { implement } from "@orpc/server";
import { contract } from "../contracts";
import { authMiddleware, orgMiddleware, sentryMiddleware, subscriptionMiddleware } from "../middleware";

export const baseProcedure = implement(contract).use(sentryMiddleware)

export const protectedProcedure = baseProcedure.use(authMiddleware)

export const orgProcedure = baseProcedure.use(orgMiddleware)

export const premiumProcedure = orgProcedure.use(subscriptionMiddleware)