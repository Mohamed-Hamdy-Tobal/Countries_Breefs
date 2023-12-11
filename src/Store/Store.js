import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './Reducers/countriesSlice'


export const store = configureStore({
    reducer: {
        filterProducts: countriesSlice,
    },
})