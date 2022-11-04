import { Dispatch, SetStateAction } from 'react';

export interface CreateProductViewModel {
	toggleCreateProduct: Dispatch<SetStateAction<boolean>>
}