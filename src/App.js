import './App.css';

import {Routes,Route} from 'react-router-dom'
import Todo from './pages/Todo';
import Navbar from './components/Navbar';
import CompleteTask from './pages/CompleteTask';


function App() {


  return (
    <div className=" bg-primary min-h-screen">
        <Navbar />
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/home' element={<Todo/>} />
            <Route path='/complete' element={<CompleteTask/>} />
          </Routes>
    </div>
  );
}

export default App;
