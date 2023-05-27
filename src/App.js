import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Hamburger from './hamburger';
import "./index.css";

export function App() {
  return (
    <>
      <div>
        <Hamburger />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
