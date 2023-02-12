import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addtask from './pages/Addtask';
import Login from './pages/Login';
import Error from './pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/Addtask" element={<Addtask/>} />
        <Route path= "/Login" element={<Login/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;