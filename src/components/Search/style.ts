import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 864px;
  display: flex;
  flex-direction: column;
  margin: auto;
  div {
    display: flex;
    justify-content: space-between;
    p:first-child {
      color: ${(props) => props.theme.baseSubtitle};
      font-size: ${(props) => props.theme.text18};
      font-weight: 700;
    }
    p:last-child {
      color: ${(props) => props.theme.baseSpan};
      font-size: ${(props) => props.theme.text14};
    }
  }
  input {
    display: flex;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.baseBorder};
    background-color: ${(props) => props.theme.baseInput};
    font-size: ${(props) => props.theme.text16};
    color: ${(props) => props.theme.baseLabel};
    &:focus {
      color: ${(props) => props.theme.baseText};
      border: 1px solid ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 864px) {
    margin: 2rem;
  }
`
