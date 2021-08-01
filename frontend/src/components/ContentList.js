import styled from "styled-components";


const StyledDiv = styled.div`


    padding: 12px 16px;
    display: block;
    background-color: grey;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    
    width: 85%;
    margin: auto;

    border: 4px solid white;
    gap: 20px;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

function ContentList({ cont, handleClick}) {
    return cont.map(function (cont, index) {
        function onClick() {
            // console.log('tadt')
            // console.log(cont)
            handleClick(cont);
        }

        return (
            <div class="result">
                <a onClick={onClick}>
                    <StyledDiv>

                        <h2>{cont.id}</h2>
                        <p>{cont.type}</p>

                    </StyledDiv>
                </a>
            </div>
        )
    })
}



export default ContentList;