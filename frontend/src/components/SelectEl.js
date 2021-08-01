import styled from "styled-components";
import '../styling/App.css';

const StyledDiv = styled.div`

    padding: 12px 16px;
    display: block;
    background-color: white;
    color: black;
    
    width: 85%;
    margin: auto;

    border: 2px solid black;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

function SelectEl({ selected }) {
    if (selected == null){
        return (<div></div>)
    }
    if (selected.type == "joke" || selected.type == "fact") {
        return (
            <div class="result-text">{selected.content}</div>
        ) 
    }
    if (selected.type == "video") {
        var video_url = selected.content + "?autoplay=1";
        return (<iframe width="916" height="515" src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    }
    if (selected.type == "gif") {
        return (<img class="result-gif" src={selected.content}/>)
    }
}



export default SelectEl;