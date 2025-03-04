import React, { useState, useEffect } from "react";
import "../styling/index.css";
import "../styling/w3.css";
import Button from "../components/Button";
import exampleCall from "../api/exampleCall";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

//import CatGif from '../components/cat.js';

// function showAlert() {
//   alert("You just clicked the button!");
// }

// async function callServer() {
//   const response = await exampleCall();
//   if (response.success) {
//     alert(`Server says: ${JSON.stringify(response.data)}`);
//   } else {
//     alert(`Server had an error: ${JSON.stringify(response.error)}`);
//   }
// }

function IndexPage() {
  // console.log(initPercent);

  const [keyword, setKeyword] = useState(
    "asasdfhudsfhsufhusdhfudhfusdhfuojsifd"
  );
  const [content, setContent] = useState("");
  const [myType, setType] = useState("joke");
  const [percent, setPercent] = useState(0);
  var timeNow;

  const [item, setItem] = useState("");
  function handleSearch(event) {
    setItem(event.target.value)
  }

  useEffect(() => {
    getStoredPercent();
    timeNow = Date.now();
  }, []);

  useEffect(() => {
    // const timer = window.setInterval(() => {
    //   setTime(prevTime => prevTime + 1); // <-- Change this line!
    // }, 1000);
    // return () => {
    //   window.clearInterval(timer);
    // };
    // };

    const interval = setInterval(() => {
      // e.preventDefault();
      if (Date.now() - timeNow > 10) {
        // var yeet = getStoredPercent()
        // console.log("THIS IS THE PERCEUHAdAJJDADH")
        // console.log(yeet)
        // console.log(percent)
        setPercent((currentPercent) =>
          currentPercent < 5 ? 0 : currentPercent - 5
        );
        // updatePercentage(newPercent);
        // var tryPerecent = ;
        // console.log(tryPerecent)
        // updatePercentage(tryPerecent);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .put("http://localhost:3001/api/status", {
        status: percent,
      })
      .then((res) => {
        // setPercent(newPercent);
      });
  }, [percent]);

  async function getStoredPercent() {
    axios.get("http://localhost:3001/api/status").then((res) => {
      setPercent(res.data);
      // return res.data;
    });
  }

  // async function updatePercentage(newPercent) {
  //   // console.log(newPercent);
  //   axios
  //     .put("http://localhost:3001/api/status", {
  //       status: newPercent,
  //     })
  //     .then((res) => {
  //       setPercent(newPercent);
  //     });
  // }

  let progStyle = {
    width: `${getStatus(percent)}px`,
  };

  function getStatus(percent) {
    return (percent / 100) * 220;
  }

  async function addContent(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/database", {
        id: keyword,
        content: content,
        type: myType,
      })
      .then((res) => {
        var newPercent = percent >= 100 ? 100 : percent + 5;
        setPercent(newPercent);
        // timeNow = Date.now();
        // console.log(res);
      });
  }

  function handleKeyChange(event) {
    setKeyword(event.target.value);
  }

  // function handleTypeChange(event) {
  //   var thingToReturn = document.querySelector('#typeSelectorKids').value;
  //   setType(thingToReturn);
  // }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  // getStoredPercent();

  return (
    <div id={"index-container"}>
      <div className={"spacer spacerTop"} />
      <div className={"content"}>
        <img className={"logo"} src="../noodle.png" />
        {/* <p>You have reached the default index page of the WDCC x SESA Mern Hackathon.</p>
        <p>This block of text is vertically centered through the magic of <b>CSS flexbox</b></p> */}
        {/* <p>Go to another page <a href={'/another'}>here</a></p> */}

        <input
          className={"search_input"}
          type="search"
          placeholder="Oodle"
          id="site-search"
          name="q"
          aria-label="Search through data"
          onChange ={handleSearch}
        ></input>
        
        <button className={"search_button"}><Link to={`/search/${item}`}>I'm Feeling Lazy</Link></button>
        {/* <CatGif></CatGif> */}
        <img
          className={"cat"}
          src="https://media.tenor.com/images/dab9fdca9a4f9125b5fae019ec84550c/tenor.gif"
        />

        <div className={"progress-scaf"}>
          <div className={"progress"} style={progStyle}>
            _
          </div>
        </div>

        <div className={"percentToken"}>{percent}%</div>

        <form className={"noodle_form"}>
          <div className={"cust_grid"}>
        
            <input
              type="text"
              id="key"
              placeholder="Enter keyword"
              onChange={handleKeyChange}
            />
         
            <select
              id="typeSelectorKids"
              onChange={handleTypeChange}
              name="type"
            >
              <option value="joke" onChange={handleTypeChange}>
                Joke
              </option>
              <option value="fact" onChange={handleTypeChange}>
                Fact
              </option>
              <option value="video" onChange={handleTypeChange}>
                Video
              </option>
              <option value="gif" onChange={handleTypeChange}>
                Gif
              </option>
            </select>
         
            <input
              type="text"
              id="content"
              placeholder="Enter content"
              onChange={handleContentChange}
            />
          </div>

          {/* <div></div> */}
          <div>
            <button className={"add"} onClick={addContent}>
              FEED ME
            </button>
          </div>
        </form>

        {/* <Button buttonText={'Click me!'} clickAction={showAlert} />
        <Button buttonText={'Say hello to the server!'} clickAction={callServer} /> */}
      </div>
      <div className={"spacer"} />
    </div>
  );
}

export default IndexPage;
