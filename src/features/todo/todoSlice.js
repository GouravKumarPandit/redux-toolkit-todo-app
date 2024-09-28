import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            todo: "Testing Testing"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addUpdateTodo: (state, action) => {
            if(action.payload.id){
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            }
            const newTodo = {
                id: nanoid(),
                todo: action.payload.todo
            }

            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addUpdateTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer;
