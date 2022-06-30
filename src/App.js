import './App.css';

import {Routes,Route} from 'react-router-dom'
import Todo from './pages/Todo';
import CompleteTask from './pages/CompleteTask';
import Navbar from './components/Navbar';


function App() {


  return (
    <div className=" bg-gradient-to-r from-[#7F24CF] to-[#A55DEB] min-h-screen ">
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
