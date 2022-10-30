
import './App.css';
import './styles/index.css'
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Body from './layouts/Body';
import Footer from './layouts/Footer';


function App() {
  return (
    <div className='layout'>
        <Header/>
        <Sidebar/>
        <Body/>
        <Footer/>
    </div>
  );
}


export default App;