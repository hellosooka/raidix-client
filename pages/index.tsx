import type { NextPage } from 'next'
import { TableHeader } from "../components/TableHeader/TableHeader";
import styles from "../styles/Home.module.css";
import CreateProductView from "../components/CreateProductView/CreateProductView";
import { useEffect, useState } from 'react';
import ProductService from '../API/ProductService'
import { useFetch } from '../hooks/useFetch'
import Product from '../components/Product/Product';
import { ProductModel } from '../components/Product/Product.model';

export default function Home() {

  const [isProductView, setIsProductView] = useState(false)
  const [products, setProducts] = useState<ProductModel[]>([])

  const [fetchProducts, isProductsLoading, productsError] = useFetch(async () => {
    const response = await ProductService.getProducts()
    setProducts(response.data.data)
    
  })
  

  useEffect(() => {
    if (typeof fetchProducts === 'function') {
      fetchProducts()
    }
  }, [])
  

  return (
    <>
      { isProductView && <CreateProductView toggleCreateProduct={setIsProductView} />}
      <div className={styles.container}>
        <main className={styles.main}>
          <span className={styles.title}> Table </span>
          <TableHeader toggleCreateProduct={setIsProductView} />
          {isProductsLoading 
          ?
          <span>
            Loading products
          </span>
          :
          products.map(product => <Product key={product.id} {...product} /> )
        }
        </main>
      </div>
    </>
  );
}
