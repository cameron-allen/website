import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Hamburger from './NavBar';
import "./index.css";

export function App() {
  return (
    <>
      <div>
        <Hamburger />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
