import { useContext } from 'react'
import { CardPost } from '../CardPost'
import { PostContext } from '../../Contexts/PostsContext'
import { PostContent } from './style'

export function Posts() {
  const contextPost = useContext(PostContext)
  return (
    <PostContent>
      {contextPost.posts.posts?.map((post) => {
        const createdDate = new Date(post.createdAt)
        return (
          <CardPost
            key={post.id}
            numberPost={post.numberPost}
            body={post.body}
            title={post.title}
            createdAt={createdDate}
          />
        )
      })}
    </PostContent>
  )
}
