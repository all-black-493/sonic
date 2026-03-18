"use client"

import { InferRouterOutputs } from "@orpc/server"
import { createContext, useContext } from "react"
import type { router } from "@/lib/orpc/routers"

type TTSVoiceItem = InferRouterOutputs<typeof router>["voicesRouter"]["getAll"]["custom"][number]

interface TTSVoicesContextValue {
    customVoices: TTSVoiceItem[]
    systemVoices: TTSVoiceItem[]
    allVoices: TTSVoiceItem[]
}

const TTSVoicesContext = createContext<TTSVoicesContextValue | null>(null)

export function TTSVoicesProvider({
    children,
    value
}: {
    children: React.ReactNode;
    value: TTSVoicesContextValue
}) {
    return (
        <TTSVoicesContext.Provider value={value}>
            {children}
        </TTSVoicesContext.Provider>
    )
}

export function useTTSVoices() {
    const context = useContext(TTSVoicesContext)

    if (!context) {
        throw new Error("useTTSVoices must be used within a TTSVoicesProvider")
    }

    return context
}