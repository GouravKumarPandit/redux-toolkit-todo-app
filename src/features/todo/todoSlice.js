import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: []
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
            console.log(JSON.stringify(state))
            localStorage.setItem("todos", JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log(JSON.stringify(state))
            localStorage.setItem("todos", JSON.stringify(state));
        },
    }
})

export const { addUpdateTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer;
