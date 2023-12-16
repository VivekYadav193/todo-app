import { createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos:[{ id:1,text:"Hello" }]
}

const  todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action) => {
      
      const todo = {
        id:nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    
    removeTodo:(state,action) => {
      
      const todo = state.todos.find(todo => todo.id === action.payload)
       
      state.todos.splice(state.todos.indexOf(todo),1)
      
    },
    
  }
})


export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
