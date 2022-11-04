import React from 'react'
import ProductProp from '../ProductProp/ProductProp'
import { ProductModel } from './Product.model'
import styles from './Product.module.css'

export default function Product(props: ProductModel) {


	
	return (
		<div>
			
			<div className={styles.productContainer} >
					<ProductProp title="ID:" > {props.id} </ProductProp>
					<ProductProp title="TITLE:" > {props.title} </ProductProp>
					<ProductProp title="WEIGHT:" > {props.weight} </ProductProp>
					<ProductProp title="DATE:" > {props.Date} </ProductProp>
					<ProductProp title="EXISTING:" > {props.isExist.toString()} </ProductProp>
					<ProductProp title="CUSTOMER:" > {props.customer} </ProductProp>
					<div className={styles.buttons} > 
						<button className={styles.editButton} >Edit</button>
						<button className={styles.deleteButton} >Delete</button>
					</div>
			</div>
		</div>
	)
}
