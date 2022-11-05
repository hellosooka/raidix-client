import { TableHeader } from "../components/TableHeader/TableHeader";
import styles from "../styles/Home.module.css";
import CreateProductView from "../components/CreateProductView/CreateProductView";
import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import useInput from "../hooks/useInput";

export default function Home() {
  const [isProductView, setIsProductView] = useState(false);
  const [responseView, setResponseView] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const searchQuery = useInput("");

  return (
    <>
      {isProductView && (
        <CreateProductView toggleCreateProduct={setIsProductView} />
      )}
      <div className={styles.container}>
        <main className={styles.main}>
          <span className={styles.title}> Table </span>
          <TableHeader
            searchQuery={searchQuery}
            toggleCreateProduct={setIsProductView}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
          <ProductList
            searchQuery={searchQuery}
            isProductView={isProductView}
            selectedSort={selectedSort}
          />
        </main>
      </div>
    </>
  );
}
