import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'


function App() {

  const [listofUsers, setlistofUsers] = useState([])
  const [name, setname] = useState('second')
  const [age, setage] = useState(0)
  const [username, setusername] = useState("second")


  useEffect(() => {

    Axios.get('http://localhost:3001/getUsers').then((res) => {
      setlistofUsers(res.data)
    })

  }, []);


  const createUser = () => {
    //axios post req                          //object for the body
    Axios.post('http://localhost:3001/createUser', {
      name: name,
      age: age,
      username: username
    }).then((res) => {
      setlistofUsers([ ...listofUsers, {
        name: name,
        age: age,
        username: username
        
      }])
      setname(''); // clear input field for name
      setage(''); // clear input field for age
      setusername(''); // clear input field for username
    })


    // window.location.reload();

  }







  return (
    <div className="App">
      <h1>WELCOME TO MY FULL STACK WEBSITE</h1>

      <div className="usersDisplay">

        {listofUsers.map((user) => {
          return (
            <div>
              <h3>Name: {user.name}</h3>
              <h3>age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          )
        })}

      </div>

      <div className="enter">
        <input onChange={(event)=>setname(event.target.value)} type="text" placeholder='Name..' /><br />
        <input onChange={(event) => setage(event.target.value)}type="Number" placeholder='Age..' /><br />
        <input onChange={(event) => setusername(event.target.value)} type="text" placeholder='Username..' /><br />
        <button onClick={createUser}>Create User</button>
      </div>

    </div>
  );
}

export default App;
