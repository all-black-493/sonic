import * as Sentry from '@sentry/node'
import { ORPCInstrumentation } from '@orpc/otel'

Sentry.init({
    dsn: '...',
    sendDefaultPii: true,

    tracesSampleRate: 1.0,

    openTelemetryInstrumentations: [
        new ORPCInstrumentation(),
    ]
})