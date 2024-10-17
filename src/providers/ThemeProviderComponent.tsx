/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


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
