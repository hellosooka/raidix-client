import axios from 'axios';
import { ChangeProductById } from './dto/changeProductById.dto';
import { CreateProductDto } from './dto/createProduct.dto';

export default class ProductService {
	static async getProducts() {
		
		const response = await axios.get('http://raidix-api.herokuapp.com/api/product/all')
		return response
	}

	static async createProduct(dto: CreateProductDto) {
		const response = await axios.post('http://raidix-api.herokuapp.com/api/product')
		return response
	}

	static async deleteProduct(id: number) {
		const response = await axios.delete(`http://raidix-api.herokuapp.com/api/product/${id.toString()}`)
		return response
	}

	static async changeProduct(id: number, dto: ChangeProductById) {
		const response = await axios.put(`http://raidix-api.herokuapp.com/api/product/${id.toString()}`)
		return response
	}

}