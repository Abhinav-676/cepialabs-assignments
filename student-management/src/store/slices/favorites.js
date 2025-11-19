import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { students: [] },
  reducers: {
    addFavorite: (state, action) => {
      const studentId = action.payload
      const exists = state.students.find(id => id === studentId)
      if (exists) return

      return {
        ...state,
        students: [...state.students, studentId]
      }
    },
    removeFavorite: (state, action) => {
        const studentId = action.payload
        return {
            ...state,
            students: state.students.filter(id => id !== studentId)
        }
    },

    toggleFavorite: (state, action) => {
      const studentId = action.payload
      const exists = state.students.find(id => id === studentId)
      if (exists) {
        state.students = state.students.filter(id => id !== studentId)
      } else {
        state.students.push(studentId)
      }
    }
  }
});

export const { addFavorite, removeFavorite, isFavorite, toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer

export const selectIsFavorite = (state, studentId) => {
    return state.favorites.students.some(id => id === studentId)
}