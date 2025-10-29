import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        favorites: [],
    },
    reducers: {
        setFavorites: (state, action) => {
            const favorites = action.payload
            return {
                ...state,
                favorites
            }
        },

        addFavorite: (state, action) => {
            const productId = action.payload
            const newFavorites = [...state.favorites, productId]

            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            return {
                ...state,
                favorites: newFavorites
            }
        },

        removeFavorite: (state, action) => {
            const id = action.payload
            const newFavorites = state.favorites.filter(favId => {
                if (favId == id) {
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