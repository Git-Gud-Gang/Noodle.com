import React from 'react';
import '../styling/index.css';
import '../styling/App.css';

function Search() {

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
            a
          </div> 
        </div>
       
      </div>
  
    );
  }
  
  export default Search;