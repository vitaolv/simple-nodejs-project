import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    productName: string;
}

const productToDeleteReducer = createSlice({
    name: 'productBeingDeleted',
    initialState: null as Product | null,
    reducers: {
        setProductBeingDeleted: (state, action: PayloadAction<Product | null>) => action.payload,
    },
});

export const { setProductBeingDeleted } = productToDeleteReducer.actions;

export default productToDeleteReducer.reducer;