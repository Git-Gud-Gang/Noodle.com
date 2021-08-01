import React, { useState } from 'react';
import '../styling/index.css';
import '../styling/App.css';
import ContentList from '../components/ContentList';

const initialContents = [
  {
    id: "cat",
    content: "Make the workshop last minute",
    type: "joke"
  },
  {
    id: "cat",
    content: "Make the workshop last minute",
    type: "fact"
  },
  {
    id: "dog",
    content: "Make the workshop last minute",
    type: "video"
  }
];

function Search() {
  const [cont, setContents] = useState(initialContents)

  function handleClick(index) {
    const newContents = [...cont];
    newContents[index].isComplete = !cont[index].isComplete;
    // newContents[index].description = "Hello World!!"
    setContents(newContents);
  }


  return (
    <div>
      <div className={'searchPage'}>
        <img className={"search_page_logo"} src="./noodle.png" />
        <input
          className={"search_page_input"}
          type="search"
          placeholder="Search"
          id="site-search"
          name="q"
          aria-label="Search through data"
        ></input>
        <button className={"search_page_button"}>I'm Feeling Lazy</button>
        <div class="search_page_term">
          Showing results for:
        </div>
        <div class="results">

          <nav>
            <ul>
              <li class="nav-item"><a href="#">Home</a></li>
              <li class="nav-item"><a href="#">Products</a></li>
              <li class="nav-item"><a href="#">Store</a></li>
              <li class="nav-item"><a href="#">Team</a></li>
            </ul>
          </nav>


          <ContentList cont={cont} handleClick={handleClick} />


        </div>
      </div>

    </div>

  );
}

export default Search;