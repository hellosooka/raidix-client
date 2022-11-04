import { TableHeader } from "../components/TableHeader/TableHeader";
import styles from "../styles/Home.module.css";
import CreateProductView from "../components/CreateProductView/CreateProductView";
import { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import useInput from '../hooks/useInput';


export default function Home() {

  const [isProductView, setIsProductView] = useState(false)
  
  const [selectedSort, setSelectedSort] = useState('')
  
  

  return (
    <>
      { isProductView && <CreateProductView toggleCreateProduct={setIsProductView} />}
      <div className={styles.container}>
        <main className={styles.main}>
          <span className={styles.title}> Table </span>
          <TableHeader toggleCreateProduct={setIsProductView} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
          <ProductList selectedSort={selectedSort} />
        </main>
      </div>
    </>
  );
}
