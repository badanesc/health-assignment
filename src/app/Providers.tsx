"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { globalQueryClient } from "./queryClient";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(globalQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
