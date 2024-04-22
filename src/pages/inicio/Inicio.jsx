import Header from '../../components/header/Header'
import * as S from "./styled"
import Home from '../../assets/Home.png'
import Guilherme from '../../assets/Guilherme.jpg'
import Cinco from '../../assets/5.png'
import Css from '../../assets/Css.png'
import Java from '../../assets/Java.png'
import React from '../../assets/React.png'
import Styled from '../../assets/Styled.png'

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
      <S.BoxInicio>
        <div>
        <h2>Olá! <img src={Home} alt="" /> Me Chamo Guilherme Ferronato, sou:</h2>
        <h1>Front-End Developer</h1>
        <p>Tenho 30 anos e atualmente moro em Canoas-RS.
          Estou iniciando a jornada de Front-End, onde crio sites utilizando o ecossitema React e claro, 
          sempre seguindo boas práticas de cocumentação e metodologia ágeis.
        </p>
        <S.BoxSec>
        <p>Habilidades</p>
        <img src={Cinco} alt="" />
        <img src={Css} alt="" />
        <img src={Java} alt="" />
        <img src={React} alt="" />
        <img src={Styled} alt="" />
        <p>Se interessou pelo meu trabalho?</p>
        <p>Envie um email para guiferronato5@gmail.com</p>
        </S.BoxSec>
        </div>
        <img src={Guilherme} alt="" />
        
      </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
