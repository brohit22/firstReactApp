import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'Todo task',
      completed: false,
    },
  ],

  // todo -> message inside the array list

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  // console.log('tODOcONTEXT', TodoContext);
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
