import { Dispatch, SetStateAction } from 'react';

export interface TableHeaderModel {
	toggleCreateProduct: Dispatch<SetStateAction<boolean>>
	selectedSort: any
	setSelectedSort: Dispatch<SetStateAction<string>>
	searchQuery: {
    value: any;
    onChange: (event: any) => void;
    setValue: Dispatch<any>;
	}
}