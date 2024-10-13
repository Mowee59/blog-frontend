"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * ReactQueryProviderComponent is a provider component that sets up the React Query client
 * and provides it to the rest of the application. It also includes the React Query Devtools
 * for debugging purposes.
 *
 * @param {React.PropsWithChildren} props - The properties object containing the children components.
 * @returns {JSX.Element} The rendered QueryClientProvider component with React Query Devtools.
 */
function ReactQueryProviderComponent({ children }: React.PropsWithChildren) {
  // Initialize the QueryClient instance using React's useState hook
  const [client] = React.useState(new QueryClient());

  return (
    // Provide the QueryClient instance to the rest of the application
    <QueryClientProvider client={client}>
      {children}
      {/* Include the React Query Devtools for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProviderComponent;
