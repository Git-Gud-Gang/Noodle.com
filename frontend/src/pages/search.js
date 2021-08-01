import React, { useState, useEffect } from 'react';
import '../styling/index.css';
import '../styling/App.css';
import ContentList from '../components/ContentList';
import SelectEl from '../components/SelectEl';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

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
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: "dog",
    content: "https://media1.giphy.com/media/NVBR6cLvUjV9C/giphy.gif?cid=ecf05e47j0ex6ut524t1gnqf45ltyj8bii6rng6yf15mkh81&rid=giphy.gif&ct=g",
    type: "gif"
  },
  {
    id: "dog",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: "dog",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: "dog",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: "dog",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: "dog",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  }
];

const knownKeys = ['cat', 'clock']

function Search() {
  let { id } = useParams();

  const [cont, setContents] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getStoredPercent();
  }, [])

  async function getStoredPercent() {
    axios.get(`http://localhost:3001/api/database/${id}`).then((res) => {
      if (res.data.length == 0){
        // console.log('nones');
        var ind = Math.round((Math.random() * (knownKeys.length - 1)));
        axios.get(`http://localhost:3001/api/database/${knownKeys[ind]}`).then((res) => {

          // console.log('nonassaes');
          // console.log(ind)s
          setContents(res.data);
        })
      } else {
        setContents(res.data);
      }
      // return res.data;
    });
  }

  

  function handleClick(contentEl) {
    setSelected(contentEl)
    console.log(contentEl.id)
    // const newContents = [...cont];
    // newContents[index].isComplete = !cont[index].isComplete;
    // newContents[index].description = "Hello World!!"
    // setContents(newContents);
  }

  function noScroll() {
    window.scrollTo(0, 0);
  }
  
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);

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