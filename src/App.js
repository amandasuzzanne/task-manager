import './App.css';
import {Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./pages/Home"
import ManageTasks from './pages/ManageTasks';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="managetasks" element={<ManageTasks/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;