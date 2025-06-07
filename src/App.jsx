import React, { useState, useEffect} from 'react';
import './App.css';
import Users from './components/Users/Users';
import Success from './components/Success/Success';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2', {
      headers: {
        "x-api-key" : "reqres-free-v1",
      },
    })
      .then(res => res.json())
      .then(object => setUsers(object.data))
      .catch(err => {
        console.warn(err);
        alert("Error when downloading users!");
      })
      .finally(() => setIsLoading(false))
  }, []);
         
  console.log(users);
  console.log(isLoading);

  function searchFunction(event) {
    setSearchValue(event.target.value);
  }

  function onClickInvite(id) {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(item => item !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  function sendInvites() {
    if (invites.length > 0) setSuccess(true);
  }

  return (
    <>
      <div className="App">
        {
          success ?         
          <div className="success"><Success count={invites.length} /></div> :
          <Users search={searchValue} searchFunc={searchFunction} items={users} loading={isLoading} onClickInvite={onClickInvite} invites={invites} sendInvites={sendInvites}/>
        }
      </div>
    </>
  )
};

export default App;
