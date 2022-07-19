import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q)
    props.getQuery(q)
  }

  return (
    <div>
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
    </div>
  );
};

export default Search;
