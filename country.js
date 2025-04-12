import { useState } from "react";
import "./styles.css";

export default function App() {
  let countries = ["INDIA", "USA", "CANADA"];
  let stateMapping = {
    INDIA: ["wb", "kt", "mh"],
    USA: ["SD", "SDF", "ERF"],
    CANADA: ["SFS", "FDFV", "FSFCC"],
  };

  const [country, setCountry] = useState("INDIA");
  const [state, setState] = useState("");
  const [selectedStates, setSelectedSates] = useState(stateMapping["INDIA"]);

  const onCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setSelectedSates(stateMapping[selectedCountry]);
    setState("");
  };

  const onStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select value={country} onChange={onCountryChange}>
        {countries.map((data, i) => (
          <option key={i} value={data}>
            {data}
          </option>
        ))}
      </select>
      <select value={state} onChange={onStateChange}>
        <option value="">selected state</option>
        {selectedStates.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>
        {country}==={state}
      </p>
    </div>
  );
}
