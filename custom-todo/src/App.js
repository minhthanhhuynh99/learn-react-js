import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
//import components
import Header from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';
import CreateTaskPopup from './modals/CreateTask';
import { Modal } from 'reactstrap';
function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>

        <Routes>
          <Route path='/Header' element={<Header/>}></Route>
          <Route path='/add-new' element={<Modal/>}></Route>
          <Route path='/CreateTaskPopup' element={<CreateTaskPopup/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
