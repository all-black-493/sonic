import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useVoiceAvatar } from "./use-voice-avatar";

interface VoiceAvatarProps {
    seed: string;
    name: string;
    className?: string;
}

export function VoiceAvatar({
    seed,
    name,
    className
}: VoiceAvatarProps) {
    const avatarURl = useVoiceAvatar(seed)

    return (
        <Avatar className={cn("size-4 border-background shadow-xs", className)}>
            <AvatarImage src={avatarURl} alt={name} />
            <AvatarFallback className="text-[8px]">
                {name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    )
}