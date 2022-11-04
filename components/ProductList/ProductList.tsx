import React, { useEffect, useMemo, useState } from 'react'
import ProductService from '../../API/ProductService'
import { useFetch } from '../../hooks/useFetch'
import Product from '../Product/Product'
import { ProductModel } from '../Product/Product.model'
import { ProductListModel } from './ProductList.model'
import styles from './ProductList.module.css'

export default function ProductList({selectedSort}: ProductListModel) {

	const [isProductView, setIsProductView] = useState(false)
  const [products, setProducts] = useState<ProductModel[]>([])
  
  const sortedProducts = useMemo(() => {
    if (selectedSort == "title") {
      return [...products].sort((a,b) => {
        return a.title.localeCompare(b.title)
      })
    } 

    return products
  }, [products, selectedSort])

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
		<div className={styles.listContainer} >
			
			{isProductsLoading 
          ?
          <span className={styles.loading} >
            Loading products...
          </span>
          :
          sortedProducts.map(product => <Product key={product.id} {...product} /> )
        }
		</div>
	)
}
