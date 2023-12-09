import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
    filterProducts: JSON.parse(sessionStorage.getItem('countries')) || storeData,
    singlePro: JSON.parse(sessionStorage.getItem('oneCountry')) || storeData,
    error : false
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setFilterProducts: (state, action) => {
            try {
                // Try To Get Data From Json File
                const filter = storeData.filter(product => (product.type) === action.payload )
                console.log(filter)
                state.filterProducts = filter
                state.error = false

                // To Save The Data On Session Storage
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem('countries', saveState)
            } catch (error) {
                return error
            }
        },
        singleProduct: (state, action) => {
            try {
                const onePro = storeData.filter(product => product.id === action.payload)
                state.singlePro = onePro
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(onePro)
                sessionStorage.setItem('oneProduct', saveState)

            } catch (err) {
                return err
            }
        },
        filterGender: (state, action) => {
            try {
                const genderFilter = state.filterProducts.filter(product => product.gender === action.payload)
                state.filterProducts = genderFilter
                
                state.error = false
                
                if (genderFilter.length > 0) {
                    state.error = false

                    // To Save The Data On Session Storage
                    const saveState = JSON.stringify(genderFilter)
                    sessionStorage.setItem('filterData', saveState)
                } else {
                    state.error = true
                    state.filterProducts = []
                }

            } catch (err) {
                return err
            }
        },
        sortFilter : (state) => {
            try {
                const priceFilter = state.filterProducts.sort((a, b) => a.price > b.price ? -1 : 1)
                state.filterProducts = priceFilter
                
                state.error = false
                
                if (priceFilter.length > 1) {
                    const noError = false
                    state.error = noError

                    if (!noError) {
                        state.filterProducts = priceFilter
                        
                        // To Save The Data On Session Storage
                        const saveState = JSON.stringify(priceFilter)
                        sessionStorage.setItem('filterData', saveState)
                    }

                } else {
                    state.error = true
                    state.filterProducts = []
                }

            } catch (err) {
                return err
            }
        },
        colorFilter : (state, action) => {
            try {
                const colorFilter = state.filterProducts.filter( product => product.color.includes(action.payload))
                state.filterProducts = colorFilter
                
                state.error = false
                
                if (colorFilter.length >= 1) {
                    state.error = false
                    state.filterProducts = colorFilter

                    // To Save The Data On Session Storage
                    const saveState = JSON.stringify(colorFilter)
                    sessionStorage.setItem('filterData', saveState)

                } else {
                    state.error = true
                    state.filterProducts = []
                }

            } catch (err) {
                return err
            }
        }
        ,
        sizeFilter : (state, action) => {
            try {
                const sizeFilter = state.filterProducts.filter( product => product.size.includes(action.payload))
                state.filterProducts = sizeFilter
                state.error = false
                
                if (sizeFilter.length >= 1) {
                    state.error = false
                    state.filterProducts = sizeFilter

                    // To Save The Data On Session Storage
                    const saveState = JSON.stringify(sizeFilter)
                    sessionStorage.setItem('filterData', saveState)

                } else {
                    state.error = true
                    state.filterProducts = []
                }

            } catch (err) {
                return err
            }
        }
    }
})

export const { setFilterProducts, singleProduct, filterGender, sortFilter, colorFilter, sizeFilter } = productsSlice.actions

export default productsSlice.reducer