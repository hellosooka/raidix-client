import React, { useEffect, useMemo, useState } from 'react'
import ProductService from '../../API/ProductService'
import { useFetch } from '../../hooks/useFetch'
import Product from '../Product/Product'
import { ProductModel } from '../Product/Product.model'
import { ProductListModel } from './ProductList.model'
import styles from './ProductList.module.css'
const Moment = require('moment')

export default function ProductList({selectedSort, isProductView, searchQuery}: ProductListModel) {

	
  const [products, setProducts] = useState<ProductModel[]>([])
  
  const sortedProducts = useMemo(() => {
    if (selectedSort == "title") {
      return [...products].sort((a,b) => {
        return a.title.localeCompare(b.title)
      })
    } else if (selectedSort == 'date') {
      return [...products].sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))
    }
    return products
  }, [products, selectedSort])

  const sortedAndSearchedProducts = useMemo(() => {
    return [...sortedProducts].filter(product => product.title.includes(searchQuery.value) )
  }, [products, searchQuery, selectedSort])

  const [fetchProducts, isProductsLoading, productsError] = useFetch(async () => {
    const response = await ProductService.getProducts()
    setProducts(response.data.data)
  })

  const deleteProductById = (id: number) => {
    setProducts(sortedProducts.filter(product => product.id != id))
  }
  
  

  useEffect(() => {
    if (typeof fetchProducts === 'function') {
      if (isProductView != true) {
        setTimeout(() => {
          fetchProducts()
        }, 1000)
      } else {
        fetchProducts()
      }
    }
  }, [isProductView])

	return (
		<div className={styles.listContainer} >
			
			{isProductsLoading 
          ?
          <span className={styles.loading} >
            Updating products...
          </span>
          :
          sortedAndSearchedProducts.map(product => <Product key={product.id} {...product} deleteProductById={deleteProductById} /> )
        }
        {(sortedAndSearchedProducts.length == 0 && !isProductsLoading ) && <span> Empty </span> }
		</div>
	)
}
