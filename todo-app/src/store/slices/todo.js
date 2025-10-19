import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: JSON.parse(localStorage.getItem("list")) || [],
        priorities: ["high", "default", "completed"]
    },

    reducers: {
        add: (state, action) => {
            const id = uuidv4()
            const text = action.payload.text
            const priority = action.payload.priority
            const priorities = state.priorities
            if (text.trim() == "") {
                return
            }
            const newList = [...state.list, {id, text, priority}]

            const sortedList = newList.sort((a,b) => {
                const pindexa = priorities.indexOf(a.priority)
                const pindexb = priorities.indexOf(b.priority)

                return (pindexa - pindexb)
            })

            return {
                ...state,
                list: sortedList
            }
        },

        remove: (state, action) => {
            const id = action.payload;
            const filteredList = state.list.filter(({id: _id}) => {
                if (_id == id) {
                    return false
                }

                return true
            })

            return {
                ...state,
                list: filteredList
            }
        },

        edit: (state, action) => {
            const {text: _text, priority: _priority, id: _id} = action.payload
            const priorities = state.priorities

            const newList = state.list.map(({id, text, priority}) => {
                if (_id == id) {
                    return {id: _id, text: _text, priority: _priority}
                }

                return {id, text, priority}
            })

            const sortedList = newList.sort((a,b) => {
                const pindexa = priorities.indexOf(a.priority)
                const pindexb = priorities.indexOf(b.priority)

                return (pindexa - pindexb)
            })

            return {
                ...state,
                list: sortedList
            }
        }
    }
})

export const {add, remove, edit} = todoSlice.actions
export default todoSlice.reducer