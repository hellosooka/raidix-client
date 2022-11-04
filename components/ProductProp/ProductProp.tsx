import React from 'react'
import { ProductPropModel } from './ProductProp.model'
import styles from './ProductProp.module.css'

export default function ProductProp({title, children}: ProductPropModel) {
	return (
		<div className={styles.productPropContainer} >
			<strong className={styles.title} >{ title }</strong>
			<span className={styles.value} >{ children }</span>
		</div>
	)
}
