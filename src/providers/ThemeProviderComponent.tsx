"use client";

/**
 * Import the ThemeProvider component from the next-themes library.
 * The ThemeProvider component is used to manage and apply themes to the application.
 */
import { ThemeProvider } from "next-themes";

/**
 * ThemeProviderComponent is a functional component that wraps its children with the ThemeProvider
 * from the next-themes library. This component is responsible for managing the theme of the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 * @returns {JSX.Element} The rendered ThemeProvider component with the provided children.
 */
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
