"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-3 rounded-lg bg-opacity-10 bg-foreground">
      <h3 className="text-sm font-medium mb-2">Select Theme</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTheme("light")}
          className={`px-3 py-1.5 rounded-md transition-colors ${
            theme === "light" ? "bg-foreground text-background" : "bg-background/30"
          }`}
        >
          Light
        </button>
        
        <button
          onClick={() => setTheme("dark")}
          className={`px-3 py-1.5 rounded-md transition-colors ${
            theme === "dark" ? "bg-foreground text-background" : "bg-background/30"
          }`}
        >
          Dark
        </button>
        
        <button
          onClick={() => setTheme("candy")}
          className={`px-3 py-1.5 rounded-md transition-colors ${
            theme === "candy" ? "bg-foreground text-background" : "bg-background/30"
          }`}
        >
          Candy
        </button>
        
        {/* Add more theme buttons as needed */}
      </div>
    </div>
  );
}