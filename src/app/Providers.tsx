'use client'

import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren } from "react";
import { getQueryClient } from '@/app/getQueryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
