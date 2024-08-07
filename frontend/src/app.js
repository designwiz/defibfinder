import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import ListView from './components/ListView';
import UploadForm from './components/UploadForm';
import axios from 'axios';

function App() {
  const [defibrillators, setDefibrillators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch defibrillators data from backend
    axios.get('/api/defibrillators')
      .then(response => {
        setDefibrillators(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nearest Defibrillators</h1>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Map defibrillators={defibrillators} />
          <ListView defibrillators={defibrillators} />
          <UploadForm />
        </>
      )}
    </div>
  );
}

export default App;
