"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadcn } from "@clerk/themes";
import { useTheme } from "next-themes";

export function CustomClerkProvider({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme();

    const baseTheme = resolvedTheme === "dark" ? dark : shadcn;

    return (
        <ClerkProvider
            appearance={{
                baseTheme,
            }}
        >
            {children}
        </ClerkProvider>
    );
}