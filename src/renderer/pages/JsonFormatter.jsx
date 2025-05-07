import React, { useState } from 'react';
import './ToolStyles.css';

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const formatJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
      setFormattedJson('');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
      setFormattedJson('');
    }
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h2 className="tool-title">JSON Formatter</h2>
        <p>Format or minify JSON data</p>
      </div>

      <div className="input-group">
        <label htmlFor="json-input">JSON Input</label>
        <textarea
          id="json-input"
          value={inputJson}
          onChange={(e) => setInputJson(e.target.value)}
          placeholder='{"key": "value"}'
        />
      </div>

      <div className="button-group">
        <button onClick={formatJson}>Format</button>
        <button onClick={minifyJson}>Minify</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {formattedJson && (
        <div className="result-container">
          <label>Result</label>
          <pre>{formattedJson}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;