import styled,{createGlobalStyle} from "styled-components";
import Fundo from '../../assets/Fundo.jpg'
import Borda from "../../assets/Planeta.svg"


export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-image: url(${Fundo});  */
}

body {
    background-image: url(${Fundo});
    background-position: 30%;
  }
`

export const Header = styled.header`
/* border: solid 2px red; */
width: 15vw;
/* background-color: #2e2e2e; */
/* background-color: rgba(46, 46, 46, 0.5); 50% de opacidade */

display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 750px) {
  width: 20vw;
}
@media (max-width:500px) {
  width: 100%;
  height: 30vh;
}
/* justify-content: space-between; */
`

export const BoxLogo = styled.div`
/* border: solid 1px green; */
display: flex;
flex-direction: column;
align-items: center;
width: 15vw;
height: 38vh;
justify-content: space-evenly;
color: black;
font-family: "Montserrat", sans-serif;

img{
  width: 20px;
  height: 20px;
}

@media (max-width: 500px){
  height: 15vh;
  padding-left: 30px;
  flex-direction: row;
}
`
export const Planeta = styled.div`
    --d:120px;
  width: var(--d);
  height:var(--d);
  display:inline-block;
  margin: 5px;
  border-radius: 50%;
  box-shadow: -10px -10px 30px 1px #000 inset, 0 0 20px 2px #000;
  background: 
    url(https://i.stack.imgur.com/3SLqF.jpg)
    0/auto 100%;
  animation: spin 20s linear infinite
}

@keyframes spin {
  to {
    background-position:200% 0;
  }
`


export const BoxMenu = styled.nav`
/* border: solid 3px;
background-image: url(${Borda});
background-repeat: round;
position: relative; */

/* border: thick double #32a1ce; */






width: 100%;
height: 38vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

li{
  /* list-style: none;
  border-style: ridge;
  border-width: 7px;
  border-color: skyblue;   */
  height: 12.5vh;
  width: 15vw;
  display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
}

a{
  
  text-decoration: none;
  font-family: cursive;
  display: flex;
  

  //Texto
  color: #7a7979;
  &:hover {
    /* color: #fff; White text on hover */
    box-shadow: 0 0 .5rem #fff,
            0 0 .5rem #fff,
            0 0 5rem #018afa,
            0 0 0.9rem #018afa,
            0 0 5rem #018afa,
            inset 0 0 0.7rem #018afa;}
 
}

@media (max-width:500px) {  
  height: 15vh;
}
` 
export const Lista = styled.li`

height: 12.5vh;
  width: 15vw;
  display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;

`

export const BoxIcon = styled.div`
/* border: solid 1px red; */
width: 100%;
height: 38vh;
display: flex;
align-items: center;
justify-content: space-evenly;


img {
  width: 3vw;
  &:hover {
    /* color: #fff; White text on hover */
    box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem #018afa,
            0 0 0.5rem #018afa,
            0 0 1rem #018afa,
            inset 0 0 0.3rem #018afa;
}
}
`
