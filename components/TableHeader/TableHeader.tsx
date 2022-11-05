import React from "react";
import useInput from "../../hooks/useInput";
import { TableHeaderModel } from './TableHeader.model';
import styles from "./TableHeader.module.css";

export const TableHeader = ({toggleCreateProduct, selectedSort, setSelectedSort, searchQuery}: TableHeaderModel) => {
  

  return (
    <div className={styles.headerContainer} >
      <div className={styles.searchContainer} >
        <input
          className={styles.searchInput}
          placeholder="Search..."
          value={searchQuery.value}
          onChange={searchQuery.onChange}
          type="text"
        />
      </div>
      <div className={styles.functionalContainer} >
        <select value={selectedSort} onChange={event => setSelectedSort(event.target.value)} className={styles.sortSelect}>
          <option value="" disabled> Sorting </option>
          <option value="id" > By id </option>
          <option value="title"> By title </option>
          <option value="date"> By date </option>
        </select>
        <button onClick={() => toggleCreateProduct(p => p = true)} className={styles.createButton} > Create </button>
      </div>
    </div>
  
  );
};
