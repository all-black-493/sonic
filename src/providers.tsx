"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadcn } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useState } from "react";
import { createQueryClient } from "./lib/query-client";
import { QueryClientProvider } from '@tanstack/react-query'


export function Providers({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme();
    const baseTheme = resolvedTheme === "dark" ? dark : shadcn;
    const [queryClient] = useState(() => createQueryClient())


    return (
        <ClerkProvider
            appearance={{
                baseTheme,
            }}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ClerkProvider>
    );
}