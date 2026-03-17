"use client"

import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, Mic, UploadCloud, FileAudio, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useTypedAppFormContext } from "@/hooks/use-app-form"
import { useStore } from "@tanstack/react-form"
import { sttFormOptions } from "./speech-to-text-form"
import { TranscribeButton } from "@/features/text-to-speech/components/transcribe-button"

export function AudioInputPanel() {

    const form = useTypedAppFormContext(sttFormOptions)

    const file = useStore(form.store, (s) => s.values.file)
    const isSubmitting = useStore(form.store, (s) => s.isSubmitting)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            form.setFieldValue("file", acceptedFiles[0])
        }
    }, [form])

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: {
            "audio/*": [".mp3", ".wav", ".m4a", ".aac"]
        },
        maxFiles: 1,
        noClick: true,
        noKeyboard: true
    })

    const clearFile = (e: React.MouseEvent) => {
        e.stopPropagation()
        form.setFieldValue("file", null)
    }

    return (
        <div className="flex h-full min-h-0 flex-col flex-1">
            <div
                {...getRootProps()}
                className={cn(
                    "relative flex min-h-0 flex-1 items-center justify-center p-6 border-2 m-4 lg:m-6 rounded-xl transition-all duration-200",
                    isDragActive
                        ? "border-primary bg-primary/5 scale-[0.99]"
                        : "border-transparent bg-muted/30",
                    file ? "border-solid border-muted" : "border-dashed"
                )}
            >
                <Input {...getInputProps()} />

                {!file ? (
                    <div className="flex flex-col items-center gap-6 text-center">

                        <div className="flex items-center justify-center gap-4">

                            <Button
                                variant="outline"
                                className="h-20 w-32 flex-col gap-2 rounded-xl shadow-none"
                            >
                                <Mic className="size-5 text-muted-foreground" />
                                <span className="text-xs">Record Audio</span>
                            </Button>

                            <span className="text-xs text-muted-foreground font-medium">
                                OR
                            </span>

                            <Button
                                onClick={open}
                                variant="outline"
                                className="h-20 w-32 flex-col gap-2 rounded-xl shadow-none"
                            >
                                <UploadCloud className="size-5 text-muted-foreground" />
                                <span className="text-xs">Upload File</span>
                            </Button>

                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-medium">
                                {isDragActive ? "Drop it here!" : "Upload or record your audio"}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Supports MP3, WAV, M4A up to 25MB
                            </p>
                        </div>

                    </div>
                ) : (

                    <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-200">

                        <div className="relative">
                            <div className="rounded-full bg-primary/10 p-6">
                                <FileAudio className="size-10 text-primary" />
                            </div>

                            <Button
                                size="icon"
                                variant="destructive"
                                className="absolute -right-2 -top-2 size-6 rounded-full"
                                onClick={clearFile}
                            >
                                <X className="size-3" />
                            </Button>
                        </div>

                        <div className="text-center px-4">
                            <p className="text-sm font-medium truncate max-w-64">
                                {file.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                        </div>

                    </div>

                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
            </div>

            {/* Action bar */}

            <div className="shrink-0 p-4 lg:p-6 lg:pt-0">

                <div className="flex flex-col gap-3 lg:hidden">
                    <TranscribeButton
                        className="w-full"
                        disabled={!file || isSubmitting}
                        isSubmitting={isSubmitting}
                        onSubmit={() => form.handleSubmit()}
                    />
                </div>

                <div className="hidden items-center justify-between lg:flex">

                    <Badge variant="outline" className="gap-1.5 border-dashed">
                        <Coins className="size-3 text-amber-500" />
                        <span className="text-xs">
                            <span className="tabular-nums">$0.0000</span> estimated
                        </span>
                    </Badge>

                    <div className="flex items-center gap-3">

                        <p className="text-xs tracking-tight text-muted-foreground">
                            {file ? "File ready" : "Awaiting audio input"}
                        </p>

                        <TranscribeButton
                            size="xs"
                            disabled={!file || isSubmitting}
                            isSubmitting={isSubmitting}
                            onSubmit={() => form.handleSubmit()}
                        />

                    </div>

                </div>

            </div>
        </div>
    )
}