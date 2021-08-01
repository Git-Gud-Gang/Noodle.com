import styled from "styled-components";

const StyledDiv = styled.div`

    padding: 12px 16px;
    display: block;
    background-color: white;
    
    width: 100%;
    margin: auto;

    border: 2px solid black;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

function ContentList({ cont, handleClick }) {
    return cont.map(function (cont, index) {
        function onClick() {
            handleClick(index);
        }

        return (
            <StyledDiv>
                <input type="checkbox" value={cont.isComplete} onClick={onClick} />
                <h2>{cont.id}</h2>
                <p>{cont.type}</p>
            </StyledDiv>
        )
    })
}

export default ContentList;