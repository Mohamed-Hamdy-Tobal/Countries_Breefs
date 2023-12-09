import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Reducers/productsSlice'


export const store = configureStore({
    reducer: {
        filterProducts: productsSlice,
    },
})