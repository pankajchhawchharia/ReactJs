import "./styles.css";

export default function App() {
  let arrs = ["abc", "xyz", "john"];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select>
        {arrs.map((arr, index) => (
          <>
            <option key={index}>{arr}</option>
          </>
        ))}
      </select>
    </div>
  );
}
