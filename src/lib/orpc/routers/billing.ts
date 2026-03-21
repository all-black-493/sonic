import { polar } from "@/lib/polar";
import { orgProcedure } from "./base";
import { env } from "@/lib/env";

export const createCheckout = orgProcedure.billingRouter.createCheckout.handler(async ({ context, errors }) => {
    const result = await polar.checkouts.create({
        products: [env.POLAR_PRODUCT_ID],
        externalCustomerId: context.orgId,
    })

    if (!result.url) {
        throw errors.INTERNAL_SERVER_ERROR({
            message: "Failed to create checkout session"
        })
    }

    return { checkoutUrl: result.url }
})

export const createPortalSession = orgProcedure.billingRouter.createPortalSession.handler(async ({ context, errors }) => {
    const result = await polar.customerSessions.create({
        externalCustomerId: context.orgId
    })
    if (!result.customerPortalUrl) {
        throw errors.INTERNAL_SERVER_ERROR({
            message: "Failed to create customer portal session"
        })
    }

    return { portalUrl: result.customerPortalUrl }
})

export const getStatus = orgProcedure.billingRouter.getStatus.handler(async ({ context }) => {
    try {
        const customerState = await polar.customers.getStateExternal({
            externalId: context.orgId
        })

        const hasActiveSubscription = (customerState.activeSubscriptions ?? []).length > 0

        let estimatedCostCents = 0

        for (const sub of customerState.activeSubscriptions ?? []) {
            for (const meter of sub.meters ?? []) {
                estimatedCostCents += meter.amount ?? 0
            }
        }

        return {
            hasActiveSubscription,
            customerId: customerState.id,
            estimatedCostCents
        }
    } catch {
        return{
            hasActiveSubscription: false,
            customerId: null,
            estimatedCostCents: 0
        }
    }

})