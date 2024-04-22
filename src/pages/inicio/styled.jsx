import styled, { css } from "styled-components";


const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
/* border: solid 2px green; */
height: 100vh;
/* padding: 10px; */
display: flex; /* Aqui coloca na vertical */
`

export const Container = styled.section`
width: 100%;
${center}
/* border: solid 2px green; */


`

export const BoxInicio = styled.div`
/* border: solid 2px red; */
height: 80%;
width: 100%;
${center}

div{

    padding: 0 80px;

}

> div h2 img{
    width: 3vh;
    
  } 

h1{
    font-size:3rem;
    color: #204fcf;
    /* font-family: cursive; */
}

h2{
    font-size: 1.3rem ;
}


img{
    width: 20vw;
    border-radius: 50%;
    
    
}

`
export const BoxSec = styled.div`

p{
    ${center}
    margin-top: 20px;
}

margin-top: 20px;
/* border: solid 1px blue; */
height: 20vh;
img{
    align-items: center;
    justify-content: center;
    width: 5vw;
    margin-right: 30px;
}
`


