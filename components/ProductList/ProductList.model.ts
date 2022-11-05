import { Dispatch } from 'react';

export interface ProductListModel {
	selectedSort: string
	isProductView: boolean
	searchQuery: {
    value: any;
    onChange: (event: any) => void;
    setValue: Dispatch<any>;
	}
}