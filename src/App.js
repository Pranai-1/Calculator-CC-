import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Element from "./Factory"
import Home from './Home';
import './App.css';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/factory" element={<Element />}/>
    </Routes>
   </Router>
  );
}

export default App;
