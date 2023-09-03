import ReactMarkdown from 'react-markdown'
import { CardContainer } from './style'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import remarkUnlink from 'remark-unlink'

interface IcardPostprops {
  numberPost: number
  title: string
  body: string
  createdAt: Date
}

export function CardPost({
  numberPost,
  title,
  body,
  createdAt,
}: IcardPostprops) {
  return (
    <CardContainer to={`/post/${numberPost}`} key={numberPost}>
      <div>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkUnlink]}>{body}</ReactMarkdown>
      </div>
    </CardContainer>
  )
}
