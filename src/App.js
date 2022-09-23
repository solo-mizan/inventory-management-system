import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Settings from './Pages/Settings';
import Navbar from './Pages/Shared/Navbar';
import AddProduct from './Pages/AddProduct';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  return (
    <div className="App body">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/settings' element={<Settings></Settings>}></Route>
        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
