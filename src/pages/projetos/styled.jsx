import styled from "styled-components";
import Sky from '../../assets/Sky.jpg'



export const Main = styled.main`
/* border: solid 2px green; */
height: 100vh;
/* padding: 10px; */
display: flex; /* Aqui coloca na vertical */
`

export const Caixa = styled.section`
/* border: solid 1px green; */
width: 100%;
display: flex;
flex-direction: column; /* Adicionado para alinhar verticalmente */
align-items: center; /* Alinha os itens verticalmente */

img{
    /* border: solid 1px black; */
    width: 10vw;
    
}



  h1 {
    /* border: solid 1px red; */
    margin-top: 60px; /* Adiciona espaço acima do h1 */
    align-self: center; /* Centraliza horizontalmente */  
    color  : white ;
    
    font-family: cursive;
    text-shadow: 
      -1px -1px 0 #0258f7,  
      1px -1px 0 #0258f7,
      -1px 1px 0 #0258f7,
      1px 1px 0 #0258f7 ;
    
    
  
  }




/* align-items: center; */
`

export const BoxProj = styled.section`
display: flex;
align-items: center;



div{
    border: solid 2px black;
    /* border-radius: 20px; */
    justify-content: center;
    width: 15vw;
    height: 40vh;
    align-items: center;
    margin: 80px;
    
    

            display: flex; /* Adiciona flexbox */
    flex-direction: column; /* Define a direção da flexbox como coluna */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */





    img {
        width: 14.7vw;
        height: 35.4vh; 
    }   

    a {
        /* margin-top: 80px; */
      justify-content: center;
      align-items: center;
      text-align: center;
      
      

      img {
        width: 2vw; /* Define o tamanho da imagem linkável */
        height: 4.5vh; /* Define o tamanho da imagem linkável */
        align-items: center;      
        
        
      }

      h2{
        color: blue;
      }

      
      
    }

    &:hover {
    background-image: url(${Sky});
    background-position: 90%;
    
    color: #fff; /* White text on hover */
    box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem #018afa,
            0 0 0.5rem #018afa,
            0 0 1rem #018afa,
            inset 0 0 0.3rem #018afa;
  }           
}

`





