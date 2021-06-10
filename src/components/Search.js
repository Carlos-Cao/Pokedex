import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Statistics from "./Statistics";

const Search = (props) => {
  const [SearchQuery, setSearchQuery] = useState("pikachu");
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      setSearchQuery(input);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a Pokemon"
          aria-label=""
          aria-describedby=""
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-danger" onClick={handleSubmit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Statistics SearchQuery={SearchQuery.toLowerCase()} />
    </div>
  );
};

export default Search;
