import { Dispatch, SetStateAction } from 'react';

export interface TableHeaderModel {
	toggleCreateProduct: Dispatch<SetStateAction<boolean>>
}