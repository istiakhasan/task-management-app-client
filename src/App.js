import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import CompleteTask from "./pages/CompleteTask";
import Navbar from "./components/Navbar";
import Calander from "./pages/Calander";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className=" bg-gradient-to-r from-[#7F24CF] to-[#A55DEB] min-h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/home" element={<Todo />} />
        <Route path="/complete" element={<CompleteTask />} />
        <Route path="/calender" element={<Calander />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
