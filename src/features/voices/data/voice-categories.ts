import type { VoiceCategory } from "@/generated/prisma/client";

export const VOICE_CATEGORY_LABELS: Record<VoiceCategory, string> = {
    ADVERTISING: "Advertising",
    AUDIOBOOK: "Audiobook",
    CONVERSATIONAL: "Conversational",
    CUSTOMER_SERVICE: "Customer Service",
    CHARACTERS: "Characters",
    CORPORATE: "Corporate",
    GENERAL: "General",
    NARRATIVE: "Narrative",
    MEDITATION: "Meditation",
    MOTIVATIONAL: "Motivational",
    PODCAST: "Podcast",
    VOICEOVER: "Voiceover"
}

export const VOICE_CATEGORIES = Object.keys(
    VOICE_CATEGORY_LABELS,
) as VoiceCategory[]