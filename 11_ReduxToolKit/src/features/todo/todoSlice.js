import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello world' }],
};

// reducer
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // includes properties and functions
  // state - current state  // action - data which pass
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // ! TODO
    updateTodo: (state, action) => {},
  },
});

// Export in parts

// export individual functions
export const { addTodo, removeTodo } = todoSlice.actions;

// export reducer
export default todoSlice.reducer;
