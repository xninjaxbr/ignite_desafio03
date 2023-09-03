import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 2rem 2rem;
  margin: auto;
  max-width: 864px;
  transform: translateY(-20%);
  border-radius: 10px;
  > img {
    width: 148px;
    margin-right: 2rem;
    border-radius: 8px;
  }
  @media (max-width: 864px) {
    margin: 2rem;
  }
  @media (max-width: 675px) {
    flex-direction: column;
    transform: translateY(-10%);
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 450px) {
    transform: translateY(-7%);
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    > img {
      margin: 0;
    }
    p {
      text-align: center;
    }
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.text12};
    gap: 0.5rem;
  }
  a > span > img {
    width: 16px;
  }
  h1 {
    font-size: ${(props) => props.theme.text24};
    color: ${(props) => props.theme.baseTitle};
    font-weight: 700;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Tags = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: nowrap;
  gap: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 1rem;
  }

  @media (max-width: 450px) {
    width: 130px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
