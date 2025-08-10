import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState([loading backend data...]);
  const [proxyData, setProxyData] = useState([loading proxy data...]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setBackendData(data.message))
      .catch((error) => {
        console.error('Error fetching backend data:', error);
        setBackendData('Error: Could not connect to backend.');
      });

    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setProxyData(data.message))
      .catch((error) => {
        console.error('Error fetching proxy data:', error);
        setProxyData('Error: Could not connect to backend.');
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Backend Endpoint 1: <code>/api/data</code></p>
      <p>{backendData}</p>
      <p>Backend Endpoint 2: <code>/api/hello</code></p>
      <p>{proxyData}</p>
    </div>
  );
}

export default App;