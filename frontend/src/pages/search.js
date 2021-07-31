import React from 'react';
import '../styling/index.css';
import '../styling/App.css';


function Search() {

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
                    
                </div>

                <div class="content-display">
                <p>
                    View results here:
                </p>
                </div>

                </div>

         
        </div>
       
      </div>
  
    );
  }
  
  export default Search;