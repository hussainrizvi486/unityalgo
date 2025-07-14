import { twMerge } from "tailwind-merge";

function cn(...args: (string | null | undefined)[]): string {
    return twMerge(args.filter(String).join(" "));
}

export { cn };