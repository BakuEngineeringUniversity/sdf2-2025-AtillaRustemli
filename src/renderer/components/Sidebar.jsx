import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>DevToys</h1>
      </div>
      
      <div className="sidebar-section">
        <h2>Favorites</h2>
        <ul>
          <li>
            <Link to="/json-formatter">
              <i className="icon icon-json"></i>
              <span>JSON Formatter</span>
            </Link>
          </li>
          <li>
            <Link to="/base64-encoder">
              <i className="icon icon-base64"></i>
              <span>Base64 Encoder</span>
            </Link>
          </li>
          <li>
            <Link to="/uuid-generator">
              <i className="icon icon-uuid"></i>
              <span>UUID Generator</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h2>All Tools</h2>
        <ul>
          <li className="category">
            <span>Converters</span>
            <ul>
              <li>
                <Link to="/number-base">Number Base</Link>
              </li>
              <li>
                <Link to="/image-base64">Image ⇄ Base64</Link>
              </li>
              <li>
                <Link to="/csv-json">CSV ⇄ JSON</Link>
              </li>
            </ul>
          </li>
          <li className="category">
            <span>Encoders/Decoders</span>
            <ul>
              <li>
                <Link to="/base64-text">Base64 (Text)</Link>
              </li>
              <li>
                <Link to="/url-encoder">URL Encoder</Link>
              </li>
              <li>
                <Link to="/html-encoder">HTML Encoder</Link>
              </li>
            </ul>
          </li>
          <li className="category">
            <span>Formatters</span>
            <ul>
              <li>
                <Link to="/json-formatter">JSON</Link>
              </li>
              <li>
                <Link to="/xml-formatter">XML</Link>
              </li>
              <li>
                <Link to="/sql-formatter">SQL</Link>
              </li>
            </ul>
          </li>
          <li className="category">
            <span>Generators</span>
            <ul>
              <li>
                <Link to="/uuid-generator">UUID</Link>
              </li>
              <li>
                <Link to="/hash-generator">Hash</Link>
              </li>
              <li>
                <Link to="/lorem-ipsum">Lorem Ipsum</Link>
              </li>
            </ul>
          </li>
          <li className="category">
            <span>Text</span>
            <ul>
              <li>
                <Link to="/text-diff">Text Diff</Link>
              </li>
              <li>
                <Link to="/markdown-preview">Markdown Preview</Link>
              </li>
              <li>
                <Link to="/regex-tester">Regex Tester</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;