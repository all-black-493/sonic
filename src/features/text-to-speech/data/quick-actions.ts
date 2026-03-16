export interface QuickAction {
    title: string;
    description: string
    gradient: string;
    href: string
}

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a Story",
        description: "Bring characters to life with expressive AI narration",
        gradient: "from-cyan-400 to-cyan-50",
        href: "/text-to-speech?text=In a small mountain hamlet, the townspeople whispered about a hidden clocktower whose chimes foretold the true destiny of anyone who listened at midnight."
    },
    {
        title: "Record an Ad",
        description: "Craft a compelling commercial voiceover that grabs attention",
        gradient: "from-pink-400 to-pink-100",
        href: "/text-to-speech?text=Introducing the latest innovation in home comfort. Imagine the perfect temperature year round with zero effort. This is not a dream, this is the future of your home climate solution, available now."
    },
    {
        title: "Podcast Introduction",
        description: "Create a warm, engaging intro for your show",
        gradient: "from-orange-400 to-orange-100",
        href: "/text-to-speech?text=Welcome to The Sonic Hour, where we explore ideas that spark curiosity, inspire action, and change the way you think. Let’s dive into today’s adventure."
    },
    {
        title: "Voice a Game Character",
        description: "Give your fictional hero or villain a memorable voice",
        gradient: "from-blue-500 to-blue-100",
        href: "/text-to-speech?text=You have entered the Forbidden Forest, traveler. Beware the whispers in the trees, for they speak of hidden trials and forgotten legends. Only the brave may proceed."
    },
    {
        title: "Direct a Movie Scene",
        description: "Turn a vivid scene into cinematic narration",
        gradient: "from-violet-400 to-violet-100",
        href: "/text-to-speech?text=The camera sweeps over the stormy ocean as lightning cracks across the sky. In the distance, a solitary ship battles towering waves, its captain shouting orders with fearless resolve."
    },
    {
        title: "Inspirational Message",
        description: "Uplifting text to motivate and energize your listeners",
        gradient: "from-teal-500 to-teal-100",
        href: "/text-to-speech?text=Take a deep breath and imagine everything you want to achieve. Every small step you take today brings you closer to the life you envision. Let determination be your guide."
    }
]