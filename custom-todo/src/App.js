import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
//import components
import Header from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';
import CreateTaskPopup from './modals/CreateTask';
import { Form } from 'reactstrap';
function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>

        <Routes>
          <Route path='/Home' element={<Header/>}></Route>
          <Route path='/SideBar' element={<SideBar/>}></Route>
          <Route path='/CreateTaskPopup' element={<CreateTaskPopup/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
