import React,{useState} from 'react';

export default function TodoForm(props) {

  //  const [input,setInput] = useState('');

   const handleChange = e =>{
    setInput(e.target.value)
   }
   const handleSubmit = (e) =>{
    e.preventDefault();
    props.addTask({
    id:Math.float(Math.random() * 1000000),
    text: input,
    isComplete: false
   })
   setInput('')
  return (
    <form>
      <input type="text" placehloder="Add a todo" onChange={handleChange} value={input} className="todo-input" name="text" />
      <button type="submit" onclick = {handleSubmit} className="todo-btn">ADD TODO</button>
    </form>
       )}
}
