import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background: ${(props) => props.theme.basePost};
  border-radius: 10px;
  padding-bottom: 2rem;
  border: 2px solid transparent;
  &:hover {
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.baseLabel};
    background: ${(props) => props.theme.basePost};
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    span {
      display: block;
      color: ${(props) => props.theme.baseSpan};
      font-size: ${(props) => props.theme.text14};
      white-space: nowrap;
    }
    h1 {
      font-size: ${(props) => props.theme.text20};
      font-weight: 700;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
      text-overflow: ellipsis;
    }
  }
  .markdown {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-size: ${(props) => props.theme.text16};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
