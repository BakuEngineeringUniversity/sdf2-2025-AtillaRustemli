import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Base64ImageEncoder from './pages/Base64ImageEncoder';
import JsonFormatter from './pages/JsonFormatter';
import TextTools from './pages/TextTools';
import Converters from './pages/Converters';
import Generators from './pages/Generators';
import Formatters from './pages/Formatters';
import Validators from './pages/Validators';

const App = () => {
  const [activeTool, setActiveTool] = useState('');

  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h1 className="app-title">DevToys</h1>
          
          <div className="sidebar-section">
            <h2 className="section-title">Receipts</h2>
            <ul className="tool-list">
              <li>
                <Link to="/base64-image" onClick={() => setActiveTool('base64-image')}>
                  Base64 Image Encoder / Decoder
                </Link>
              </li>
              <li>
                <Link to="/json-formatter" onClick={() => setActiveTool('json-formatter')}>
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link to="/text-tools" onClick={() => setActiveTool('text-tools')}>
                  Text Analyzer and Utilities
                </Link>
                <ul className="sub-tool-list">
                  <li>Converters</li>
                  <li>Encoders / Decoders</li>
                  <li>Formatters</li>
                  <li>Generators</li>
                  <li>Graphic</li>
                  <li>Testers</li>
                  <li>Text</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h2 className="section-title">All tools</h2>
            <ul className="tool-list">
              <li>
                <Link to="/converters" onClick={() => setActiveTool('converters')}>
                  Converters
                </Link>
              </li>
              <li>
                <Link to="/generators" onClick={() => setActiveTool('generators')}>
                  Generators
                </Link>
              </li>
              <li>
                <Link to="/formatters" onClick={() => setActiveTool('formatters')}>
                  Formatters
                </Link>
              </li>
              <li>
                <Link to="/validators" onClick={() => setActiveTool('validators')}>
                  Validators
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/base64-image" element={<Base64ImageEncoder />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/text-tools" element={<TextTools />} />
            <Route path="/converters" element={<Converters />} />
            <Route path="/generators" element={<Generators />} />
            <Route path="/formatters" element={<Formatters />} />
            <Route path="/validators" element={<Validators />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const HomePage = () => (
  <div className="home-page">
    <h2>Welcome to DevToys</h2>
    <p>Select a tool from the sidebar to get started.</p>
  </div>
);

export default App;