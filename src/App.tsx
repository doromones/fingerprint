import React, {useEffect, useState} from 'react';
import './App.css';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

function App() {
  const [visitorId, setVisitorId] = useState('');
  const [fingerPrintComponents, setFingerPrintComponents] = useState({});

  async function setFingerprint() {
      const fp = await FingerprintJS.load();
      const fingerprint = await fp.get();
      const { visitorId } = fingerprint;
      // console.log(fingerprint)
      setVisitorId(visitorId)
      setFingerPrintComponents(fingerprint)
  }

  useEffect(() => {
      setFingerprint()
  }, [])

  return (
      <div>
          <h1>This is the fingerprint hash</h1>
          <h3>VisitorId: {visitorId}</h3>

          <pre>{JSON.stringify(fingerPrintComponents, null, 2)}</pre>
      </div>
  );
}

export default App;
