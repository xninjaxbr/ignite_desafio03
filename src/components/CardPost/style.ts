import { styled } from 'styled-components'

export const CardContainer = styled.div`
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
    }
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-size: ${(props) => props.theme.text16};
    overflow-y: hidden;
    text-overflow: ellipsis;
  }
`
