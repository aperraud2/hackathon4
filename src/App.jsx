import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Author from './components/Author';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Image Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/author/:username" element={<Author />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;