import Header from '../../components/header/Header'
import * as S from "./styled"
import Self from '../../assets/Self-care.png'
import Life from '../../assets/Life.png'
import Mac from '../../assets/Mac.png'
import Petit from "../../assets/Astronauta.png"





export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.Caixa>
        <h1>Meus Projetos</h1>
      <S.BoxProj>
        <div onClick={() => window.open('https://github.com/Always108/Selfcare', '_blank')}>
        <h2>Selfcare</h2>
        <img src={Self} alt="" /> 
        </div>

        <div onClick={() => window.open('https://github.com/Always108/beat', '_blank')}>
        <h2>Life</h2>
        <img src={Life} alt="" /> 
        </div>

        <div onClick={() => window.open('https://github.com/Always108/Mac-VnW', '_blank')}>
        <h2>Mac</h2>
        <img src={Mac} alt="" /> 
        </div>
      </S.BoxProj>   
      <img src={Petit} alt="" />   
      </S.Caixa>
    </S.Main>
  )
}