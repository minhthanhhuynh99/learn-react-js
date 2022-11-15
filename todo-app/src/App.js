import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import NotFault from "./layouts/Not";
import SideBar from "./layouts/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/add-newtask" element={<Form />} />
          <Route path="/*" element={<NotFault />} />
        </Routes>
      </div>
    </>
  );
}
export default App;