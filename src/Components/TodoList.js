import React from 'react'
import {useState} from 'react/cjs/react.development';
import TaskFrom from './TodoForm'
export default function TodoList() {

    // state array which will hold all the TODOS
    const [input, setInput] = useState("");
    const addTask = task =>{
        if(!task.text){
            return
        } 
        const newTodos = [task,...todos];
        setTodos(newTodos);

    }
  return (
   <TaskFrom>

   </TaskFrom>
  )
}
