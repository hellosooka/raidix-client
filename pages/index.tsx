import Head from "next/head";
import { TableHeader } from "../components/TableHeader/TableHeader";
import styles from "../styles/Home.module.css";
import CreateProductView from "../components/CreateProductView/CreateProductView";
import { useEffect, useState } from 'react';
import ProductService from '../API/ProductService'
import { useFetch } from '../hooks/useFetch'

export default function Home() {

  const [isProductView, setIsProductView] = useState(false)
  const [products, setProducts] = useState({})

  const [fetchPosts, isPostLoading, postError] = useFetch(async () => {
    const response = await ProductService.getProducts()
    setProducts(response.data)
    
  })
  

  useEffect(() => {
    if (typeof fetchPosts === 'function') {
      fetchPosts()
    }
  }, [])
  

  return (
    <>
      <Head>
        <title> My interview app </title>
      </Head>
      {products}
      { isProductView && <CreateProductView toggleCreateProduct={setIsProductView} />}
      <div className={styles.container}>
        <main className={styles.main}>
          <span className={styles.title}> Table </span>
          <TableHeader toggleCreateProduct={setIsProductView} />
        </main>
      </div>
    </>
  );
}
