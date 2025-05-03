import { create } from 'zustand';

import { PrescriptionStatus } from '@/shared/types/prescription';

interface PrescriptionFilters {
  searchTerm: string;
  statusFilter: PrescriptionStatus | 'all';
  setSearchTerm: (searchTerm: string) => void;
  setStatusFilter: (statusFilter: PrescriptionStatus | 'all') => void;
  resetFilters: () => void;
}

export const usePrescriptionsFilters = create<PrescriptionFilters>((set) => ({
  searchTerm: '',
  statusFilter: 'all',
  
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),

  resetFilters: () => set({ 
    searchTerm: '', 
    statusFilter: 'all', 
  }),
}));
