import './App.css';
import Count from './components/Count';
import { Routes, Route, Link } from 'react-router-dom'
import Practices from './components/Practices';
function App() {
  return (
    <>
    <header style={{width: "100%", backgroundColor: 'GrayText', padding: "15px"}}>
        <Link to='/'>Bài 1</Link>
        <Link to='/Foods'>Bài 4</Link>
    </header>
    <div className="App">
        <Routes>
          <Route path='/' element={<Count/>}/>
          <Route path='/Foods' element={<Practices/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
