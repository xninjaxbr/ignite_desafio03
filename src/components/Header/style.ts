import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  color: ${(props) => props.theme.blue};
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > div {
    & > img {
      padding: 1rem 0;
      width: 100%;
    }
  }
`

export const LogoContainer = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.baseText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 180px;
  .image {
    margin: auto;
    width: 45px;
  }
  & > span {
    font-size: ${(props) => props.theme.text24};
  }
`
