'use client'

import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren } from "react";
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { getQueryClient } from '@/app/getQueryClient'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {children}
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}
