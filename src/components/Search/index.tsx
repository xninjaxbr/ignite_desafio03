import { SearchContainer } from './style'

export function Search() {
  return (
    <SearchContainer>
      <div>
        <p>Publicações</p>
        <p>6 publicações</p>
      </div>
      <div>
        <input placeholder="Buscar conteúdo" />
      </div>
    </SearchContainer>
  )
}
