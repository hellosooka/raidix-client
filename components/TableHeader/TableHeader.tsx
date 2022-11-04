import React from "react";
import useInput from "../../hooks/useInput";
import { TableHeaderModel } from './TableHeader.model';
import styles from "./TableHeader.module.css";

export const TableHeader = ({toggleCreateProduct}: TableHeaderModel) => {
  const query = useInput("");

  return (
    <div className={styles.headerContainer} >
      <div className={styles.searchContainer} >
        <input
          className={styles.searchInput}
          placeholder="Search..."
          value={query.value}
          onChange={query.onChange}
          type="text"
        />
      </div>
      <div className={styles.functionalContainer} >
        <select className={styles.sortSelect}>
          <option disabled> Sorting </option>
          <option> By id </option>
          <option> By title </option>
          <option> By date </option>
        </select>
        <button onClick={() => toggleCreateProduct(p => p = true)} className={styles.createButton} > Create </button>
      </div>
    </div>
  
  );
};
