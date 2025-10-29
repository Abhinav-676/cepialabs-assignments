import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        favorites: [],
    },
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return {
                ...state,
                list: products
            }
        },

        setFavorites: (state, action) => {
            const favorites = action.payload
            return {
                ...state,
                favorites
            }
        },

        addFavorite: (state, action) => {
            const productId = action.payload
            const isAlreadyPresent = false
            let product = null
            state.list.forEach(prod => {
                if (prod.id == productId) {
                    product = prod
                }
            })
            state.favorites.forEach(prod => {
                if (prod.id == productId) {
                    isAlreadyPresent = true
                }
            })

            if (!isAlreadyPresent) {
                const newFavorites = [...state.favorites, {...product}]
                localStorage.setItem('favorites', JSON.stringify(newFavorites))
                return {
                    ...state,
                    favorites: newFavorites
                }
            }

            return {
                ...state
            }
        },

        removeFavorite: (state, action) => {
            const productId = action.payload
            const newFavorites = state.favorites.filter(prod => {
                if (prod.id == productId) {
                    return false
                }

                return true
            })

            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            return {
                ...state,
                favorites: [...newFavorites]
            }
        }
    }
})

export const {setProducts, addFavorite, removeFavorite, setFavorites} = productsSlice.actions
export default productsSlice.reducer