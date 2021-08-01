import React, { useState } from 'react';
import '../styling/index.css';
import '../styling/App.css';
import ContentList from '../components/ContentList';
import SelectEl from '../components/SelectEl';

const initialContents = [
  {
    id: "cat",
    content: "Make the workgrgrgrshop last minute",
    type: "joke"
  },
  {
    id: "cat",
    content: "Make the wsadsadorkshop last minute",
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
  const [selected, setSelected] = useState(null)

  function handleClick(contentEl) {
    setSelected(contentEl)
    console.log(contentEl.id)
    // const newContents = [...cont];
    // newContents[index].isComplete = !cont[index].isComplete;
    // newContents[index].description = "Hello World!!"
    // setContents(newContents);
  }

    return (
      <div>
        <div className={'searchPage'}>
        <a href={'/'}>
          <img className={"search_page_logo"} src="./noodle.png" />
          </a>
          <input

          className={"search_page_input"}
          type="search"
          placeholder="Search"
          id="site-search"
          name="q"
          aria-label="Search through data"

          ></input>
          <button className={"search_page_button"}>I'm Feeling Lazy</button>
          

            <div class="search-container">

                <div class="content-list">
                <p>
                    Search results:
                </p>

                <ContentList cont={cont} handleClick={handleClick} />

                </div>

                <div class="content-display">
                <p>
                    View results here:
                </p>
                <SelectEl selected={selected} />
                </div>

           </div>

        </div>
        
      </div>
    
  );

  
}

export default Search;