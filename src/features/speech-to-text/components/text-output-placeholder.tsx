import { Button } from "@/components/ui/button";
import { Captions, BookOpen, Sparkles, FileText } from "lucide-react";
import Link from "next/link";

export function TextOutputPlaceholder() {
    return (
        <div className="hidden flex-1 lg:flex h-full flex-col items-center justify-center gap-6 border-t">
            <div className="flex flex-col items-center gap-3">
                <div className="relative flex w-32 items-center justify-center">

                    <div className="absolute left-0 -rotate-30 rounded-full bg-muted p-4">
                        <FileText className="size-5 text-muted-foreground" />
                    </div>

                    <div className="relative z-10 rounded-full bg-foreground p-4">
                        <Sparkles className="size-5 text-background" />
                    </div>

                    <div className="absolute right-0 -rotate-30 rounded-full bg-muted p-4">
                        <Captions className="size-5 text-muted-foreground" />
                    </div>

                </div>

                <p className="text-lg font-semibold tracking-tight text-foreground">
                    Transcription will appear here
                </p>
                <p className="max-w-64 text-center text-sm text-muted-foreground">
                    Once you transcribe, your text will appear here. Ready to copy, edit, or export.
                </p>
            </div>
            <Button variant="outline" size="xs" asChild>
                <Link href="mailto:justinjerome401@gmail.com">
                    <BookOpen />
                    Don&apos;t know how?
                </Link>
            </Button>
        </div>
    )
}