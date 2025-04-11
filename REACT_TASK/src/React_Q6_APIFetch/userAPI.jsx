import React, { useEffect, useState } from 'react';
import './userAPI.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-container">
      <h2>User List</h2>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      <ul className="user-list">
        {!loading && !error && users.map((user) => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong><br />
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
