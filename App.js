import React, { useEffect, useState } from 'react';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const loadUser = async () => {
    setIsLoading(true);
    const url = "https://reqres.in/api/users?page=1";
    const res = await fetch(url);
    const resJson = await res.json();
    setUser(resJson.data);
    setIsLoading(false);
  };

  const displayData = () => {
    loadUser();
  }


  return (
    <>
      <div className="container">
        <div className="navbar">
          <h1>Get User details</h1>
          <button className='btn' onClick={displayData}>Get Data</button>
        </div>
        <h2 className='heading'>Users:</h2>
        {
          (isLoading) ? (<h2>Loading...</h2>) : null
        }

        <ul>
          {
            user.map(({ id, first_name, last_name, email, avatar }) => {
              return (
                <>
                  <div className="list">
                    <li className='userList' key={id}>Employee id: {id} <br />Name: {first_name} {last_name} <br />Email: {email}</li>
                    <img className='images' src={avatar} alt="images" />
                  </div>
                </>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App;