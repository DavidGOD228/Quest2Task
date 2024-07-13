import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('Hint: Everybody lovaes Caesar salad. Not forget how many years we have.');
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Your Quest</h1>
      <p>Scan the QR code and decode the secret message.</p>
      <div className="qr-code">
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=YBnefwA80JWqZCYW=&size=200x200" alt="QR Code" />
      </div>
    </div>
  );
};

export default App;
