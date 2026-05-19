import React, { useState, useEffect } from 'react';

export default function App() {
  const [char, setChar] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then(async (data) => {
        const updatedChar = await Promise.all(
          data.results.map(async (char) => {
            const filmTitles = await fetchFilms(char.films);
            return { ...char, films: filmTitles };
          })
        );
        setChar(updatedChar);
      })
      .catch((err) => console.log(err));
  }, []);

  async function fetchFilms(filmUrls) {
    const filmTitles = await Promise.all(
      filmUrls.map(async (url) => {
        const res = await fetch(url);
        const filmData = await res.json();
        return filmData.title;
      })
    );
    return filmTitles;
  }

  return (
    <div>
      <h2> Start wars character</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Films</th>
          </tr>
        </thead>
        <tbody>
          {char.map((char, index) => (
            <tr key={index}>
              <td>{char.name}</td>
              <td>{char.gender}</td>
              <td>
                {char.films.length > 0 ? (
                  <ul>
                    {char.films.map((film, idx) => (
                      <li key={idx}>{film}</li>
                    ))}
                  </ul>
                ) : (
                  'no film available'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
