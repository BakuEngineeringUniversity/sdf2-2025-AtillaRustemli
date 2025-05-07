import React, { useState, useEffect } from 'react';
import { useElectron } from '../../hooks/useElectron';
import ToolLayout from '../../components/ToolLayout';

const UuidGenerator = () => {
  const { ipc } = useElectron();
  const [uuids, setUuids] = useState([]);
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);

  const generateUuids = async () => {
    const newUuids = [];
    for (let i = 0; i < count; i++) {
      const uuid = await ipc.generateUuid();
      newUuids.push(uppercase ? uuid.toUpperCase() : uuid.toLowerCase());
    }
    setUuids(newUuids);
  };

  useEffect(() => {
    generateUuids();
  }, [count, uppercase]);

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate random UUIDs (v4)"
    >
      <div className="tool-controls">
        <div className="control-group">
          <label>Count:</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
          />
        </div>
        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            Uppercase
          </label>
        </div>
        <button onClick={generateUuids}>Regenerate</button>
      </div>
      <div className="uuid-list">
        {uuids.map((uuid, i) => (
          <div key={i} className="uuid-item">
            <code>{uuid}</code>
            <button onClick={() => navigator.clipboard.writeText(uuid)}>
              Copy
            </button>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
};

export default UuidGenerator;