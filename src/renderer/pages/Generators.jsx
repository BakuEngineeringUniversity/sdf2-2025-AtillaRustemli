import React, { useState } from 'react';
import './ToolStyles.css';

const Generators = () => {
  const [uuid, setUuid] = useState('');
  const [hashType, setHashType] = useState('md5');
  const [hashInput, setHashInput] = useState('');
  const [hashResult, setHashResult] = useState('');
  const [loremLength, setLoremLength] = useState(1);
  const [loremResult, setLoremResult] = useState('');

  const generateUuid = () => {
    setUuid(crypto.randomUUID());
  };

  const generateHash = () => {
    let result = '';
    if (hashType === 'md5') {
      result = 'MD5_HASH_OF_' + hashInput;
    } else if (hashType === 'sha1') {
      result = 'SHA1_HASH_OF_' + hashInput;
    } else if (hashType === 'sha256') {
      result = 'SHA256_HASH_OF_' + hashInput;
    }
    setHashResult(result);
  };

  const generateLorem = () => {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
    setLoremResult(lorem.repeat(loremLength));
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h2 className="tool-title">Generators</h2>
        <p>Generate various types of data</p>
      </div>

      <div className="generator-section">
        <h3>UUID Generator</h3>
        <div className="input-group">
          <button onClick={generateUuid}>Generate UUID</button>
          {uuid && (
            <div className="result-container">
              <pre>{uuid}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="generator-section">
        <h3>Hash Generator</h3>
        <div className="input-group">
          <select value={hashType} onChange={(e) => setHashType(e.target.value)}>
            <option value="md5">MD5</option>
            <option value="sha1">SHA-1</option>
            <option value="sha256">SHA-256</option>
          </select>
        </div>
        <div className="input-group">
          <textarea
            value={hashInput}
            onChange={(e) => setHashInput(e.target.value)}
            placeholder="Enter text to hash"
            rows={3}
          />
        </div>
        <div className="button-group">
          <button onClick={generateHash}>Generate Hash</button>
        </div>
        {hashResult && (
          <div className="result-container">
            <pre>{hashResult}</pre>
          </div>
        )}
      </div>

      <div className="generator-section">
        <h3>Lorem Ipsum Generator</h3>
        <div className="input-group">
          <label>Number of paragraphs</label>
          <input
            type="number"
            min="1"
            max="20"
            value={loremLength}
            onChange={(e) => setLoremLength(parseInt(e.target.value))}
          />
        </div>
        <div className="button-group">
          <button onClick={generateLorem}>Generate Lorem Ipsum</button>
        </div>
        {loremResult && (
          <div className="result-container">
            <p>{loremResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generators;