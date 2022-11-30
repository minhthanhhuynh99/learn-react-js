import './App.css';
import Count from './components/Count';
import { Routes, Route, Link } from 'react-router-dom'
import Practices from './components/Practices';
import MenuFoods from './components/MenuFoods';
function App() {
  return (
    <>
    <header style={{width: "100%", backgroundColor: 'GrayText', padding: "15px", display: "flex", justifyContent: "space-evenly"}}>
        <Link to='/'>Counter</Link>
        <Link to='/Foods'>Add foods Axios</Link>
        <Link to='/Menu-Foods-redux-axios'>Menu Foods redux axios</Link>
    </header>
    <div className="App">
        <Routes>
          <Route path='/' element={<Count/>}/>
          <Route path='/Foods' element={<Practices/>}/>
          <Route path='/Menu-Foods-redux-axios' element={<MenuFoods/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
