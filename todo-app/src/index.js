import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Todo/Header/Header';
import Sidebar from './components/Todo/Sidebar/Sidebar';
import Contact from './components/Todo/Contact/Contact';
import Footer from './components/Todo/Footer/Footer';
import CardItem from './components/Todo/CardList/CardItem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Sidebar/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
