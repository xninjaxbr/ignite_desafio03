import { CardContainer, Tags, PostContent } from './style'
import GitBrands from '../../assets/github-brands.svg'
import Calendar from '../../assets/calendar.svg'
import Comment from '../../assets/comment.svg'
import Back from '../../assets/back.svg'
import Arrow from '../../assets/arrow.svg'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PostContext } from '../../Contexts/PostsContext'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post() {
  const routeParams = useParams()
  const contextPost = useContext(PostContext)

  // eslint-disable-next-line array-callback-return
  const currentPost = contextPost.posts.posts?.filter((post) => {
    if (post.numberPost === Number(routeParams.id)) {
      return post
    }
  })[0]

  return (
    <>
      <CardContainer>
        <div className="buttons">
          <Link className="link" to="/">
            <img src={Back} alt="" />
            Voltar
          </Link>
          <Link className="link" to={contextPost.posts.perfil?.gitURL}>
            Ver no Github
            <img src={Arrow} alt="" />
          </Link>
        </div>
        <h1>{currentPost?.title}</h1>
        <div>
          <Tags>
            <div>
              <img src={GitBrands} alt="" />
              {contextPost.posts.perfil?.git}
            </div>
            <div>
              <img src={Calendar} alt="" />
              {formatDistanceToNow(new Date(currentPost?.createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </div>
            <div>
              <img src={Comment} alt="" />
              {currentPost?.coments} comentários
            </div>
          </Tags>
        </div>
      </CardContainer>
      <PostContent>
        <ReactMarkdown
          components={{
            img: ({ ...props }) => (
              <img style={{ maxWidth: '100%' }} alt="" {...props} />
            ),
          }}
        >
          {currentPost?.body}
        </ReactMarkdown>
      </PostContent>
    </>
  )
}
