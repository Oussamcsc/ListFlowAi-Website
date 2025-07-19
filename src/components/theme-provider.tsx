import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "listflow-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return defaultTheme;
    
    // First, try to get theme from user preferences (saved with cookies)
    try {
      const userPreferences = localStorage.getItem("userPreferences");
      if (userPreferences) {
        const preferences = JSON.parse(userPreferences);
        if (preferences.theme && ["dark", "light"].includes(preferences.theme)) {
          return preferences.theme;
        }
      }
    } catch (error) {
      console.log("Failed to parse user preferences:", error);
    }
    
    // Fallback: Try to get theme from direct theme storage
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    if (storedTheme && ["dark", "light"].includes(storedTheme)) {
      return storedTheme;
    }
    
    // If no stored theme, use default
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
      
      // Also update user preferences if they exist
      try {
        const userPreferences = localStorage.getItem("userPreferences");
        if (userPreferences) {
          const preferences = JSON.parse(userPreferences);
          preferences.theme = theme;
          localStorage.setItem("userPreferences", JSON.stringify(preferences));
        }
      } catch (error) {
        console.log("Failed to update user preferences:", error);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
