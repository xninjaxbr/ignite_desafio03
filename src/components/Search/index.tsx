import { useContext } from 'react'
import { SearchContainer } from './style'
import { PostContext } from '../../Contexts/PostsContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
  query: z.string(),
})

type TsearchFormInput = z.infer<typeof SearchFormSchema>
export function Search() {
  const contextPost = useContext(PostContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TsearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchPost(data: TsearchFormInput) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    contextPost.fetchPost(data.query)
  }
  return (
    <SearchContainer>
      <div>
        <p>Publicações</p>
        <p>{contextPost.posts.posts?.length} publicações</p>
      </div>
      <form onSubmit={handleSubmit(handleSearchPost)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </form>
    </SearchContainer>
  )
}
