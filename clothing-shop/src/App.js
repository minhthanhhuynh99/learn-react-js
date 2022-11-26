import './App.css';
//page:
import Header from './page/Header';
import Home from './page/Home';
import Create from './page/Create';
import OrderCart from './page/OrderCart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add-product' element={<Create/>}/>
            <Route path='/order-cart' element={<OrderCart/>}/>
        </Routes>
    </div>
  );
}

export default App;
