"use client"

import { useTypedAppFormContext } from "@/hooks/use-app-form"
import { useStore } from "@tanstack/react-form"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sttFormOptions } from "./speech-to-text-form"

export function STTPanelSettings() {
  const form = useTypedAppFormContext(sttFormOptions)
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting)
  const isValid = useStore(form.store, (s) => s.isValid)

  return (
    <>
      <div className="border-b border-dashed p-4">
        <p className="text-xs text-foreground">
          Configure how your audio is transcribed
        </p>
      </div>

      <div className="p-4 flex-1">
        <FieldGroup className="gap-8">

          <form.Field name="language">
            {(field) => (
              <Field>
                <FieldLabel>Language (optional)</FieldLabel>
                <Input
                  placeholder="Auto-detect"
                  value={field.state.value ?? ""}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={isSubmitting || !isValid}
                />
              </Field>
            )}
          </form.Field>

          <form.Field name="query">
            {(field) => (
              <Field>
                <FieldLabel>Intelligence Query</FieldLabel>
                <Textarea
                  placeholder="Example: Summarize the key points discussed"
                  value={field.state.value ?? ""}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={isSubmitting || !isValid}
                  rows={3}
                />
              </Field>
            )}
          </form.Field>

        </FieldGroup>
      </div>
    </>
  )
}