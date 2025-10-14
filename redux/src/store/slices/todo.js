import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: []
    },

    reducers: {
        add: (state, action) => {
            const id = uuidv4()
            const todo = action.payload
            if (todo.trim() == "") {
                return
            }
            state.list.push([todo, id])
        },

        remove: (state, action) => {
            const id = action.payload;
            const index = state.list.findIndex(x => x[1] === id);
            if (index !== -1) {
                state.list.splice(index, 1);
            }
        }
    }
})

export const {add, remove} = todoSlice.actions
export default todoSlice.reducer