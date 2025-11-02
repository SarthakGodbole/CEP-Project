// ...existing code...
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Methods from "./Methods";
import Calendar from "./Calendar";
import MediaHub from "./MediaHub";
import Discussions from "./Discussions";
import ExpertQnA from "./ExpertQnA";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <div className="header-inner">
            <h1>Organic Farming</h1>
            <nav className="nav-tabs" aria-label="Main navigation">
              <NavLink to="/" end className={({isActive}) => isActive ? 'nav-tab active' : 'nav-tab'}>Methods</NavLink>
              <NavLink to="/calendar" className={({isActive}) => isActive ? 'nav-tab active' : 'nav-tab'}>Calendar</NavLink>
              <NavLink to="/media" className={({isActive}) => isActive ? 'nav-tab active' : 'nav-tab'}>Media Hub</NavLink>
              <NavLink to="/discussions" className={({isActive}) => isActive ? 'nav-tab active' : 'nav-tab'}>Discussions</NavLink>
              <NavLink to="/expertqna" className={({isActive}) => isActive ? 'nav-tab active' : 'nav-tab'}>Expert Q&A</NavLink>
            </nav>
          </div>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Methods />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/media" element={<MediaHub />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/expertqna" element={<ExpertQnA />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
// ...existing code...