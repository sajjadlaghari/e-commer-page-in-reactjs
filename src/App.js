import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <Routes>
    <Route path="/" element={ <MainPage /> } />
    {/* <Route path="about" element={ <About/> } />
    <Route path="contact" element={ <Contact/> } /> */}
  </Routes>
  );
}

export default App;
