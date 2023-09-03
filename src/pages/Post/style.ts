import { styled } from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.4);
  padding: 2rem 2rem;
  margin: auto;
  max-width: 864px;
  transform: translateY(-20%);
  border-radius: 10px;
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .link {
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.text12};
    gap: 0.5rem;

    > img {
      color: ${(props) => props.theme.blue};
    }
  }

  h1 {
    padding: 1.25rem 0 0.75rem;
  }

  @media (max-width: 864px) {
    margin: 2rem;
  }
  @media (max-width: 380px) {
    transform: translateY(-9%);
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  color: ${(props) => props.theme.baseSpan};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 1rem;
    fill: ${(props) => props.theme.baseSpan};
  }

  @media (max-width: 450px) {
    width: 130px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const PostContent = styled.div`
  padding: 0 4rem 2rem 4rem;
  margin: auto;
  max-width: 864px;
  text-align: justify;
  div {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 2px;
    background: ${(props) => props.theme.basePost};
  }
`
