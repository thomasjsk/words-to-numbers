import { useState, useMemo } from "react";
import { parse } from "./parser";

function App() {
  const [words, setWords] = useState("");
  const handleChange = (event) => {
    setWords(event.target.value);
  };
  const text = useMemo(() => {
    try {
      return parse(words);
    } catch (err) {
      return "";
    }
  }, [words]);

  return (
    <div>
      <input value={words} onChange={handleChange} type="text" />
      <div>
        <p>Output: {text}</p>
      </div>
    </div>
  );
}

export default App;
