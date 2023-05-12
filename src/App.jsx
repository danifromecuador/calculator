import './App.css';
import {
  BrowserRouter, Routes, Route, Link, Outlet,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './stylesheets/NavBar.css';
import Home from './components/Home';

const Layout = () => (
  <div>
    <div className="NavBarContainer">
      <h1>Math Magicians</h1>
      <nav className="NavBar ul">
        <Link to="/" className="li">Home</Link>
        <Link to="/calculator" className="li">Calculator</Link>
        <Link to="/quotes" className="li">Quotes</Link>
      </nav>
    </div>
    <Outlet />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<Quote />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
