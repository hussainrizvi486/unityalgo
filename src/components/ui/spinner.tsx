import React from "react";
import { cn } from "../../utils";

interface SpinnerProps {
    size?: "sm" | "md" | "lg";
}

const Spinner: React.FC<SpinnerProps> = ({ size = "sm" }) => {
    const sizes = {
        "sm": "h-12 w-12",
        "md": "h-16 w-16",
        "lg": "h-32 w-32"
    }
    return (
        <div className={cn('h-32 w-32 border-4 border-b-transparent mx-auto rounded-full animate-spin', sizes[size])}></div>
    )
}

export { Spinner };