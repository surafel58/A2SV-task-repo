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
    .then(res => {

      if (!res.ok) throw Error('Resource is not found');
      return res.json();
    })
    .then(json => {
      //set profile state and set error to null
      setProfiles(json);
      setError(null);
    
    }).catch(err => {setError(err.message)})
  }, []);

  return (

    <div className="App">
      <h1>Profile List</h1>
      <hr style={{width: '80%'}}/>
      {/* show error message if error exists */}
      {error && <p>{error}</p>}

      {/* show profile list if no error exists*/}
      {!error && profiles && <ProfileList profiles={profiles.users} />}
    </div>
  );
}

export default App;
