import React, { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);  // Stores character data
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Selected character
  const [films, setFilms] = useState([]);  // Film titles
  const [vehicles, setVehicles] = useState([]);  // Vehicle titles

  // Fetch Star Wars People
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  // Function to fetch Films and Vehicles when character is selected
  const handleCharacterSelect = async (event) => {
    const character = characters.find(c => c.name === event.target.value);
    setSelectedCharacter(character);

    if (character) {
      try {
        // Fetch Film Titles
        const filmResponses = await Promise.all(character.films.map(url => fetch(url).then(res => res.json())));
        setFilms(filmResponses.map(film => film.title));

        // Fetch Vehicle Titles
        const vehicleResponses = await Promise.all(character.vehicles.map(url => fetch(url).then(res => res.json())));
        setVehicles(vehicleResponses.map(vehicle => vehicle.name));

      } catch (error) {
        console.error("Error fetching films or vehicles:", error);
      }
    }
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <select onChange={handleCharacterSelect}>
        <option value="">Select a Character</option>
        {characters.map((char, index) => (
          <option key={index} value={char.name}>
            {char.name}
          </option>
        ))}
      </select>

      {selectedCharacter && (
        <div>
          <h3>Details for {selectedCharacter.name}</h3>
          
          <h4>Films:</h4>
          <ul>
            {films.length > 0 ? films.map((film, index) => <li key={index}>{film}</li>) : <li>No films found</li>}
          </ul>

          <h4>Vehicles:</h4>
          <ul>
            {vehicles.length > 0 ? vehicles.map((vehicle, index) => <li key={index}>{vehicle}</li>) : <li>No vehicles found</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
