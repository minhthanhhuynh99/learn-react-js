import { useState } from 'react';
import './App.css';
import './styles/index.css'
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import { MODE } from './constants'


function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
    setRenderMode(mode);
  }
  return (
    <div className='layout'>
        <Header
          handleCreateNewTask = {() => (handleChangeRenderMode(MODE.ADD_NEW))}
        />
        <Sidebar/>
        <Body mode={renderMode} handleChangeRenderMode={handleChangeRenderMode}/>
        {renderMode === MODE.SHOW_LIST &&  <Footer/>}
        
    </div>
  );
}


export default App;