import './App.css';
import ToForm from './components/ToForm';
import Todos from './components/Todos';


function App() {
  return (
    <div className="wrapper">
      <h1 className='text-center'>To Do List</h1>
      <ToForm/>
      <Todos/>

    </div>
  );
}

export default App;
