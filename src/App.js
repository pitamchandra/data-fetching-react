import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>Hi guys!! How are all?</h1>
      <p>User Number : {users.length}</p>
      {
        users.map(user => <DisplayUserName name={user.name} email= {user.email}></DisplayUserName>)
      }
    </div>
  )
}
function DisplayUserName (props){
  return(
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h1>Name : {props.name}</h1>
      <p>Email : {props.email}</p>
    </div>
  )
}


export default App;
