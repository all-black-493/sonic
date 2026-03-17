"use client"

import { useAppForm } from "@/hooks/use-app-form"
import { formOptions } from "@tanstack/react-form"
import z from "zod"

const sttFormSchema = z.object({
  file: z.instanceof(File).nullable(),
  query: z.string().optional(),
  language: z.string().optional()
})

export type STTFormValues = z.infer<typeof sttFormSchema>

export const defaultSTTValues: STTFormValues = {
  file: null,
  query: "",
  language: ""
}

export const sttFormOptions = formOptions({
    defaultValues: defaultSTTValues
})

export function SpeechToTextForm({
    children,
    defaultValues
}: {
    children: React.ReactNode
    defaultValues?: STTFormValues
}) {

    const form = useAppForm({
        ...sttFormOptions,
        defaultValues: defaultValues ?? defaultSTTValues,
        validators: {
            onSubmit: sttFormSchema
        },

        onSubmit: async ({ value }) => {
            console.log(value)
        }
    })

    return (
        <form.AppForm>
        { children }
        </form.AppForm>
    )
}