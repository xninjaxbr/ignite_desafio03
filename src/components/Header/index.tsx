import { HeaderContainer, LogoContainer } from './style'
import Logo from '../../assets/logo.svg'
import Effectsvg from '../../assets/effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Effectsvg} alt="" />
      </div>

      <LogoContainer href="/">
        <img className="image" src={Logo} alt="" />
        <span>GITHUB BLOG</span>
      </LogoContainer>

      <div>
        <img src={Effectsvg} alt="" />
      </div>
    </HeaderContainer>
  )
}
