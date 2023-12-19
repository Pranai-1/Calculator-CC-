import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Element from "./Factory";
import Props1 from './props1';
import Home from './Home';
import './App.css';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/factory" element={<Element />}/>
      <Route path="/props" element={<Props1 />}/>
    </Routes>
   </Router>
  );
}

export default App;
