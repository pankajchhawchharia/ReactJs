import React, { useState, useEffect } from 'react';

export default function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setDatas(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = datas?.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2> Random user</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearchChange}
      />
      {loading && <p> Loading...</p>}
      {error && <p style={{ color: 'red' }}>error: {error}</p>}
      <ul>
        {filteredData.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
