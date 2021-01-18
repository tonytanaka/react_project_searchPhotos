import React, {useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey:"AGvoql3AFmYeogoOWSyGhi-fAKRAztGym03yQkBtRKk"
})

export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  // console.log('query :>> ', query);

  const [pics, setPics] = useState([]);

  const SearchPhotos = async (e) => {
    e.preventDefault();
    // console.log("Submitting the Form")
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  }

  return (
    <>
      <form className="form" onSubmit={SearchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
             📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "technology" or "office"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">Search</button>
      </form>
      <div className="card-list">
        {pics.map((pic) => <div className="card" key={pic.id}>
          <img className="card--image"
            alt={pic.alt_description}
            src={pic.urls.full}
            width="50%"
            height="50%"
            ></img>
        </div>)}
      </div>
    </>
  );
}