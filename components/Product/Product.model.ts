export interface ProductModel {
	title: string;
	weight: string;
	isExist: boolean;
	date: string;
	customer: string;
	id: number;
	deleteProductById: (id:number) => void
}