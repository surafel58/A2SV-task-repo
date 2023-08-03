import { useState, useEffect } from 'react';
import './App.css';
import "./components/style.css";
import ProfileList from './components/ProfileList';

function App() {

  //state: profile and error
  const [profiles, setProfiles] = useState(null);
  const [error, setError] = useState(null);

  //fetch profile data
  useEffect(() => {
    fetch('https://dummyjson.com/users/?limit=6')
    .then(res => res.json())
    .then(json => {
      setProfiles(json);
    }).catch(err => {setError(err)})
  }, []);

  return (

    <div className="App">
      <h1>Profile List</h1>
      <hr style={{width: '80%'}}/>
      {/* show error message if error exists */}
      {error && <p>Something went wrong...</p>}

      {/* show profile list if no error exists*/}
      {!error && profiles && <ProfileList profiles={profiles.users} />}
    </div>
  );
}

export default App;
