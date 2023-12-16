import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Element from "./Factory";
import Props from './props';
import Home from './Home';
import './App.css';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/factory" element={<Element />}/>
      <Route path="/bind" element={<Props />}/>
    </Routes>
   </Router>
  );
}

export default App;
