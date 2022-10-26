import logo from './logo.svg';
import './App.css';
//Component import
import Header from './components/Todo/Header/Header';
import Sidebar from './components/Todo/Sidebar/Sidebar';
import Contact from './components/Todo/Contact/Contact';
import Footer from './components/Todo/Footer/Footer';
import CardItem from './components/Todo/CardList/CardItem';



function App() {
  const data = [
    {
      name : "Thành"
    },
    {
      name : "Quân"
    },
    {
      name : "Hiếu"
    },
    {
      name : "Khang"
    },
    {
      name : "Thảo"
    },
    {
      name : "Trang"
    },
    {
      name : "Tuấn"
    },
    {
      name : "Minh"
    },
    {
      name : "Lộc"
    },
    {
      name : "Tường"
    },
    {
      name : "Mãn"
    },
    {
      name : "Hậu"
    },
  ]
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
