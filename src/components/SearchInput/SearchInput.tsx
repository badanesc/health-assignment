"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  const handleClean = useCallback(() => {
    setInputValue("");
    onChange("");
    inputRef.current?.focus();
  }, [onChange]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="search-input">
        Search by medication name
      </label>

      <div className={styles.searchBox}>
        <input
          ref={inputRef}
          id="search-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search medications or doctors..."
          className={styles.input}
          aria-label="Search prescriptions"
        />

        {inputValue && (
          <button className={styles.clearButton} onClick={handleClean}>
            <span className="visually-hidden">Clear search</span>
            <span aria-hidden="true">✕</span>
          </button>
        )}
      </div>
    </div>
  );
};
