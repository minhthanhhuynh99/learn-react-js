import logo from './logo.svg';
import './App.css';
//Component import
import Header from './components/Todo/Header/Header';
import Sidebar from './components/Todo/Sidebar/Sidebar';
import Contact from './components/Todo/Contact/Contact';
import Footer from './components/Todo/Footer/Footer';
import CardItem from './components/Todo/CardList/CardItem';



function App() {

  return (
    <div>
        <Header/>
        <Sidebar/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
