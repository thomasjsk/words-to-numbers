import { useState, useMemo } from "react";
import { parse } from "./parser";

function App() {
  const [words, setWords] = useState("");
  const handleChange = (event) => {
    setWords(event.target.value);
  };
  const text = useMemo(() => {
    try {
      const result = parse(words);
      return Number.isNaN(result) ? "" : result;
    } catch (err) {
      return "";
    }
  }, [words]);

  return (
    <div>
      <input
        value={words}
        onChange={handleChange}
        type="text"
        style={{ width: "100%" }}
      />
      <div>
        <p>Output: {text}</p>
      </div>
    </div>
  );
}

export default App;
