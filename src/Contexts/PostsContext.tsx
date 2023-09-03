import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { api } from '../lib/axios'

interface Iperfil {
  id: number
  avatarImg: string
  nameProf: string
  description: string
  git: string
  gitURL: string
  company: string
  followers: number
}

export interface Iposts {
  id: number
  numberPost: number
  title: string
  body: string
  labelName: string
  coments: number
  createdAt: string
}

interface Ipoststype {
  perfil: Iperfil
  posts: Iposts[]
}

interface Icontext {
  posts: Ipoststype
  fetchPost: (data?: string) => Promise<void>
}

interface IpostProps {
  children: ReactNode
}
export const PostContext = createContext({} as Icontext)

export function PostProvider({ children }: IpostProps) {
  const [posts, setPosts] = useState({} as Ipoststype)

  const fetchPost = useCallback(async (data = '') => {
    const responsePerfil = await api.get('users/xninjaxbr')
    const response = await api.get(
      `search/issues?q=${data}%20repo:xninjaxbr/ignite_desafio03`,
    )

    const perfil = {
      id: responsePerfil.data.id,
      avatarImg: responsePerfil.data.avatar_url,
      nameProf: responsePerfil.data.name,
      description: responsePerfil.data.bio,
      git: responsePerfil.data.login,
      gitURL: responsePerfil.data.html_url,
      company: responsePerfil.data.company,
      followers: responsePerfil.data.followers,
    }

    const posts = response.data.items.map(
      (post: {
        id: number
        number: number
        title: string
        body: string
        labels: { name: string }[]
        comments: string
        created_at: string
      }) => {
        const postU = {
          id: post.id,
          numberPost: post.number,
          title: post.title,
          body: post.body,
          labelName: post.labels[0].name,
          coments: post.comments,
          createdAt: post.created_at,
        }
        return postU
      },
    )

    setPosts({ perfil, posts })
    console.log('Renderizou o fetch')
    console.log(perfil)
    console.log(posts)
  }, [])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContext.Provider value={{ posts, fetchPost }}>
      {children}
    </PostContext.Provider>
  )
}
