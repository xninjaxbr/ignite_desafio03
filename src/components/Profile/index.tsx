import { ProfileContainer, Tags, Title } from './style'
import Avatar from '../../assets/avatar.png'
import Arrow from '../../assets/arrow.svg'
import GitBrands from '../../assets/github-brands.svg'
import Building from '../../assets/building-solid.svg'
import UserGroup from '../../assets/user-group.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={Avatar} alt=""></img>
      <div>
        <div>
          <Title>
            <h1>Paulo Henrique</h1>
            <button>
              GitHUB
              <span>
                <img src={Arrow} alt=""></img>
              </span>
            </button>
          </Title>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <Tags>
          <div>
            <img src={GitBrands} alt="" />
            cameronwll
          </div>
          <div>
            <img src={Building} alt="" />
            Rocketseat
          </div>
          <div>
            <img src={UserGroup} alt="" />
            32 seguidores
          </div>
        </Tags>
      </div>
    </ProfileContainer>
  )
}
