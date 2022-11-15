import { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './App.css';
import Cart from './components/Cart';
import Form from './page/formAdd/Form';
import Product from './page/Product/Product';

function App() {
  const [cart, setCart] = useState([]);
  const handleAdd = (item) => {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id)
          isPresent = true;
      })
      if (isPresent)
        return alert("Sản phẩm đã tồn tại");
      setCart([...cart, item])
  }

  const handleChange = (item, d) => {
    let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
  }

  return (
    <>
      <div className='header'>
        <ul>
          <li>
              <Link to='/form'>Form</Link>
          </li>
          <li>
              <Link to='/all-product'>All Product</Link>
          </li>
          <li>
              <Link to='/cart'>
                    <AiOutlineShoppingCart/>
                    <span>{cart.length}</span>
              </Link>
          </li>
        </ul>
      </div>
      <div className="App">
      
          <Routes>
              <Route path='/form' element={<Form/>}/>
              <Route path='/all-product' element={<Product handleAdd={handleAdd}/>}/>
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
          </Routes>
      </div>
      
    </>
  );
}

export default App;
