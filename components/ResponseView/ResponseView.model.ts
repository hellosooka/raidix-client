import { ProductModel } from '../Product/Product.model'

export interface ResponseViewModel {
	responseView: boolean
	response:  ProductModel[]
}