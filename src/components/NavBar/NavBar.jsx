import { Link } from 'react-router-dom';
import Blue from '../Colors/Blue';
import Red from '../Colors/Red';
import Home from '../Home';
import Orange from '../Colors/Orange';
import Yellow from '../Colors/Yellow';
import {Routes, Route } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/orange'>Orange</Link>
        <Link to='/Yellow'>Yellow</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/orange" element={<Orange/>} />
          <Route path="/yellow" element={<Yellow/>} />
        </Routes>
      </div>
    </div> 
    </>
  );
}

export default NavBar;
