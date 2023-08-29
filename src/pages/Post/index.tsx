import { CardContainer, Tags, PostContent } from './style'
import GitBrands from '../../assets/github-brands.svg'
import Calendar from '../../assets/calendar.svg'
import Comment from '../../assets/comment.svg'
import Back from '../../assets/back.svg'
import Arrow from '../../assets/arrow.svg'

export function Post() {
  return (
    <>
      <CardContainer>
        <div className="buttons">
          <a href="/">
            <img src={Back} alt="" />
            Voltar
          </a>
          <a href="#">
            Ver no Github
            <img src={Arrow} alt="" />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <Tags>
            <div>
              <img src={GitBrands} alt="" />
              cameronwll
            </div>
            <div>
              <img src={Calendar} alt="" />
              Rocketseat
            </div>
            <div>
              <img src={Comment} alt="" />
              32 seguidores
            </div>
          </Tags>
        </div>
      </CardContainer>
      <PostContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam
        autem laboriosam sed, nulla beatae quia cumque tempore perspiciatis sit!
        Recusandae rem repellat fugiat magni nam veniam non molestiae
        consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat aliquam autem laboriosam sed, nulla beatae quia cumque tempore
        perspiciatis sit! Recusandae rem repellat fugiat magni nam veniam non
        molestiae consequatur!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Placeat aliquam autem laboriosam sed, nulla beatae quia cumque
        tempore perspiciatis sit! Recusandae rem repellat fugiat magni nam
        veniam non molestiae consequatur!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Placeat aliquam autem laboriosam sed, nulla beatae
        quia cumque tempore perspiciatis sit! Recusandae rem repellat fugiat
        magni nam veniam non molestiae consequatur!
        <div>Markdown</div>
      </PostContent>
    </>
  )
}
