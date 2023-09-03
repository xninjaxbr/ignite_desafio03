import { ProfileContainer, Tags, Title } from './style'
import Arrow from '../../assets/arrow.svg'
import GitBrands from '../../assets/github-brands.svg'
import Building from '../../assets/building-solid.svg'
import UserGroup from '../../assets/user-group.svg'
import { useContext } from 'react'
import { PostContext } from '../../Contexts/PostsContext'

export function Profile() {
  const contextPost = useContext(PostContext)

  return (
    <ProfileContainer>
      <img src={contextPost.posts.perfil?.avatarImg} alt=""></img>
      <div>
        <div>
          <Title>
            <h1>{contextPost.posts.perfil?.nameProf}</h1>
            <a href={contextPost.posts.perfil?.gitURL}>
              GitHUB
              <span>
                <img src={Arrow} alt=""></img>
              </span>
            </a>
          </Title>
          <p>{contextPost.posts.perfil?.description}</p>
        </div>
        <Tags>
          <div>
            <img src={GitBrands} alt="" />
            {contextPost.posts.perfil?.git}
          </div>
          <div>
            <img src={Building} alt="" />
            {contextPost.posts.perfil?.company}
          </div>
          <div>
            <img src={UserGroup} alt="" />
            {contextPost.posts.perfil?.followers} seguidores
          </div>
        </Tags>
      </div>
    </ProfileContainer>
  )
}
