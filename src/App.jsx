import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the data to check its format
        setUsers(data.users); // Update this line
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  

  return (
    <>
      <h1 className='text-4xl text-center font-bold mt-10'>User Records</h1>
      <table className='mx-auto mt-6 bg-gray-200'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td><img src={user.image} alt={`Profile ${user.firstName}`} /></td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.gender}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
    <td>{user.domain}</td>
    <td>{user.ip}</td>
    <td>{user.university}</td>
    {/* Add other properties as needed */}
  </tr>
))}

        </tbody>
      </table>
    </>
  )
}

export default App;
