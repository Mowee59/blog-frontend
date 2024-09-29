"use client";
// Import the ThemeProvider component from the next-themes library
import { ThemeProvider } from "next-themes";

// Define the ThemeProviderComponent as a functional component
export function ThemeProviderComponent({
  children,
}: {
  children: React.ReactNode; // Define the type of the children prop
}) {
  return (
    <ThemeProvider
      attribute="class" // Use the "class" attribute to apply theme styles
      defaultTheme="system" // Set the default theme to follow the system preference
      enableSystem // Enable system theme detection
    >
      {children} 
    </ThemeProvider>
  );
}
