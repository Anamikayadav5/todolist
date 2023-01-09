import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Anamika Yadav
    //     </a>
    //   </header>
    // </div>
    <div classname="Todo-list-container">
      <TodoList />


    </div>
  );
}

export default App;
