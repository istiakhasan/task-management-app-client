import './App.css';

import {Routes,Route} from 'react-router-dom'
import Todo from './pages/Todo';
import Navbar from './components/Navbar';


function App() {


  return (
    <div className="App bg-primary min-h-screen">
        <Navbar />
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/home' element={<Todo/>} />
          </Routes>
    </div>
  );
}

export default App;
