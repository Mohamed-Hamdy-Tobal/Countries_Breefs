import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
    darkState: false,
    filterProducts: JSON.parse(sessionStorage.getItem('countries')) || storeData,
    singlePro: JSON.parse(sessionStorage.getItem('oneCountry')) ,
    error : false
}

const countriesSlice = createSlice({
    name: 'countriesSlice',
    initialState,
    reducers: {
        getAllContinents: (state) => {
            try {
                // Get data from the JSON file
                state.filterProducts = storeData;
                state.error = false;

                // Save the data to session storage
                const saveState = JSON.stringify(state.filterProducts);
                sessionStorage.setItem('countries', saveState);
            } catch (error) {
                // Handle errors appropriately, e.g., log or update state.error
                console.error("Error in getAllContinents:", error);
            }
        },
        // Action to filter continents based on region
        setFilterContinent: (state, action) => {
            try {
                // Get data from the JSON file and filter based on the region
                const filter = storeData.filter(continent => continent.region === action.payload);
                state.filterProducts = filter;
                state.error = false;

                // Save the filtered data to session storage
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem('countries', saveState);
            } catch (error) {
                // Handle errors appropriately, e.g., log or update state.error
                console.error("Error in setFilterContinent:", error);
            }
        },
        singleProduct: (state, action) => {
            try {
                const onePro = state.filterProducts.filter(product => product.name === action.payload)
                state.singlePro = onePro[0]
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(onePro[0])
                sessionStorage.setItem('oneCountry', saveState)

            } catch (err) {
                return err
            }
        },
        singleByBorder: (state, action) => {
            try {
                const onePro = storeData.filter(product => product.alpha3Code === action.payload)
                state.singlePro = onePro[0]
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(onePro[0])
                sessionStorage.setItem('oneCountry', saveState)

            } catch (err) {
                return err
            }
        },
        singleByInput: (state, action) => {
            try {
                const filter = storeData.filter(product => product.name.includes(action.payload))
                state.filterProducts = filter
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem('countries', saveState)

            } catch (err) {
                return err
            }
        },
        darkMood : (state) => {
            state.darkState =!state.darkState
        }
    }
})

export const { getAllContinents, setFilterContinent, singleProduct, darkMood, singleByBorder, singleByInput } = countriesSlice.actions

export default countriesSlice.reducer