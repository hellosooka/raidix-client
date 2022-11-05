import React, { useState } from 'react'
import ProductService from '../../API/ProductService'
import { useFetch } from '../../hooks/useFetch'
import useInput from '../../hooks/useInput'
import ProductProp from '../ProductProp/ProductProp'
import { ProductModel } from './Product.model'
import styles from './Product.module.css'

export default function Product(props: ProductModel) {

	const [isEditing, setIsEditing] = useState(false)
	const existing = useInput(props.isExist)
	const customer = useInput(props.customer)

	const deleteProduct = (() => {
		const response = ProductService.deleteProduct(props.id)
		props.deleteProductById(props.id)
	})

	const editProduct = (() => {
		setIsEditing(p => !p)
		const response = ProductService.changeProduct(props.id, {
			isExist: existing.value,
			customer: customer.value
		})
	})
	
	return (
		<div>
			
			<div className={styles.productContainer} >
					<ProductProp title="ID:" > {props.id} </ProductProp>
					<ProductProp title="TITLE:" > {props.title} </ProductProp>
					<ProductProp title="WEIGHT:" > {props.weight} </ProductProp>
					<ProductProp title="DATE:" > {props.date} </ProductProp>

					<ProductProp title="EXISTENCE:" > 
						{isEditing 
						?
						<select onChange={existing.onChange} className={styles.editInput} defaultValue={existing.value.toString()} >
							<option value='true' > true </option>
							<option value='false' > false </option>
						</select>
						:
						<span> {existing.value} </span>
						}
					</ProductProp>
					<ProductProp title="CUSTOMER:" > 
					{isEditing 
						?
						<input onChange={customer.onChange} value={ customer.value } className={styles.editInput} placeholder='Customer name' type="text"/> 
						:
						<span> {customer.value} </span>
						}
					</ProductProp>
					
					<div className={styles.buttons} > 
						<button onClick={() => editProduct()} className={styles.editButton} >
							{isEditing 
							?
							<span className={styles.done} > Done </span>
							:
							<span> Edit </span>
							}
						</button>
						<button onClick={() => deleteProduct()} className={styles.deleteButton} >Delete</button>
					</div>
			</div>
		</div>
	)
}
