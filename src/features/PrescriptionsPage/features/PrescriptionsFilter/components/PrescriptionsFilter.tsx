'use client';

import { useCallback } from 'react';
import { SearchInput } from '@/components/SearchInput';
import { usePrescriptionsFilters } from '../store';
import { StatusRadioGroup } from './StatusRadioGroup';
import styles from './PrescriptionsFilter.module.css';

export const PrescriptionsFilter = () => {
  const { setSearchTerm } = usePrescriptionsFilters();

  const handleSearch = useCallback((value: string) => { 
    setSearchTerm(value);
  }, [setSearchTerm]);

  return (
    <aside className={styles.filter}>
      <h3 className={styles.title}>Prescriptions Filter</h3>
      <SearchInput onChange={handleSearch} />
      <StatusRadioGroup />
    </aside>
  );
};
