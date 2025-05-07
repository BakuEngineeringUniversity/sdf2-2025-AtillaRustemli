import React, { useState } from 'react';
import { useElectron } from '../../hooks/useElectron';
import ToolLayout from '../../components/ToolLayout';

const JsonFormatter = () => {
  const { ipc } = useElectron();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState('');

  const formatJson = async () => {
    try {
      const formatted = await ipc.formatJson({ json: input, indent });
      setOutput(formatted);
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
      setOutput('');
    }
  };

  const minifyJson = async () => {
    try {
      const minified = await ipc.minifyJson(input);
      setOutput(minified);
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
      setOutput('');
    }
  };

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format or minify JSON data"
    >
      <div className="tool-grid">
        <div className="input-section">
          <div className="tool-controls">
            <button onClick={formatJson}>Format</button>
            <button onClick={minifyJson}>Minify</button>
            <select value={indent} onChange={(e) => setIndent(parseInt(e.target.value))}>
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
            </select>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            spellCheck="false"
          />
          {error && <div className="error">{error}</div>}
        </div>
        <div className="output-section">
          <div className="tool-controls">
            <button onClick={() => navigator.clipboard.writeText(output)}>
              Copy
            </button>
          </div>
          <pre>{output}</pre>
        </div>
      </div>
    </ToolLayout>
  );
};

export default JsonFormatter;