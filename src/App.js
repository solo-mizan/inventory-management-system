import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
