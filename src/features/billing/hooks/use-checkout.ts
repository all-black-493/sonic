"use client"

import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc/orpc.tanstack";

export function useCheckout() {
    const mutation = useMutation(
        orpc.billingRouter.createCheckout.mutationOptions({})
    );

    const checkout = useCallback(() => {
        mutation.mutate(undefined, {
            onSuccess: (data) => {
                window.location.href = data.checkoutUrl;
            },
        });
    }, [mutation]);

    return { checkout, isPending: mutation.isPending };
};