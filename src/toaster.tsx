"use client"

import { AlertTriangle, CheckCircle2, Info, Loader2Icon, XCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as SonnerToaster } from 'sonner';

function Toaster() {

    const { resolvedTheme } = useTheme();

    return (
        <SonnerToaster
            expand
            visibleToasts={5}
            position="bottom-right"
            icons={{
                success: <CheckCircle2 className="text-green-500" />,
                info: <Info className="text-blue-500" />,
                warning: <AlertTriangle className="text-yellow-500" />,
                error: <XCircle className="text-red-500" />,
                loading: <Loader2Icon className="animate-spin" />,
            }}
            theme={resolvedTheme as 'light' | 'dark' | 'system'}
        />

    )
}

export default Toaster
