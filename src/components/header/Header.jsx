import { Link } from "react-router-dom";
import * as S from "./styled"
import Guilherme from '../../assets/Guilherme.jpg'
import Planeta from '../../assets/Planeta.png'
import Linkedin from '../../assets/Linke.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Icon from '../../assets/Icon.gif'


export default function Header() {
  return (
    <S.Header>

      <S.BoxLogo>
      <S.Planeta></S.Planeta>
        <h2>Ferronato <img src={Icon} alt="" /></h2>
        {/* <p>Front-end Developer</p> */}
      </S.BoxLogo>
      <S.BoxMenu>
        <ul>
          <S.Lista><Link to="/">SOBRE</Link></S.Lista>
          {/* <li><Link to="/sobre">SOBRE MIM</Link></li> */}
          <S.Lista><Link to="/projetos">PROJETOS</Link></S.Lista>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <a onClick={() => window.open('https://google.com', '_blank')}><img src={Linkedin} alt="" /></a>
        <a onClick={() => window.open('https://github.com/Always108', '_blank')}><img src={Github} alt="" /></a>
        <a onClick={() => window.open('https://www.facebook.com/guiferronato/', '_blank')}><img src={Facebook} alt="" /></a>
      </S.BoxIcon>

    </S.Header>
  )
}
