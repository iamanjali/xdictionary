import { useState } from "react";

function Dictionary() {
  const [searchedWord, setSearchedWord] = useState("");
  const [def, setDef] = useState("");
  const [found, setFound] = useState(false);
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = (searchedWord) => {
    const result = dictionary.find((ele) => ele.word === searchedWord);
    if (result) {
      setDef(result.meaning);
      setFound(true);
    } else {
      setDef("");
      setFound(false);
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setSearchedWord(e.target.value)}
      />
      <button type="submit" onClick={() => handleSearch(searchedWord)}>
        Search
      </button>
      <h5>Definition:</h5>
      {searchedWord && <p>{found ? def : "Word not found in the dictionary."}</p>}
    </div>
  );
}

export default Dictionary;