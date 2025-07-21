"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import Toggle from "../ui/toggle"

export default function DarkToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-14 h-8 bg-background rounded-full animate-pulse"></div>
        );
    }

    const isDark = theme === "dark";

    return (
        <Toggle
            checked={isDark}
            onChange={(checked) => setTheme(checked ? "dark" : "light")}
            leftIcon={<Sun className="text-accent w-full h-full" />}
            rightIcon={<Moon className="text-secondary w-full h-full" />}
            ariaLabel="Toggle dark mode"
            size="md"
        />
    )
}
