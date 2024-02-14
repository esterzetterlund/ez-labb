import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pictures from './pages/Pictures';

import './App.css';

export default function App() {
  return (
    <Router>

      {/* kontainer */}
    <div className="site-container">

      {/* header */}
      <header className="site-header">
        <Menu/>
      </header>

      {/* main */}
      <main className='site-content'>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pictures' element={<Pictures/>}/>
      </Routes>
      </main>

      {/* footer */}
      <footer className='site-footer'>
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}


