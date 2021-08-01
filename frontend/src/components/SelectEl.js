import styled from "styled-components";

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
    return (
        <div>{selected.content}</div>
    )
}



export default SelectEl;