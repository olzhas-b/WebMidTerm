import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Feed from './Feed';
import Profile from './Profile';
import './App.css'

function App() {
  return (
    <Router>
      <div >
        <nav className='header'>
          <ul>
              <Link to="/" className="header-feed">Feed</Link>
              <Link to="/profile" className="header-profile">Profile</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
