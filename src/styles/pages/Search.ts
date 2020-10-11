import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

export const BackToMainPageContainer = styled.div`
  margin-bottom: 2rem;

a {
  color: #fff;
  border-radius: 5px;
  background: #069;
  padding: 10px;
  text-decoration: none;

    &:hover {
    background: #005d8c;
    transition: background 0.1s;
  }
} 
`

export const SearchContainer = styled.div`
  input {
    outline: none;
    border: none;
    width: 40vw;
    height: 2.5rem;
    text-indent: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button {
    outline: none;
    border: none;
    height: 2.5rem;
    width: 15vw;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #069;
    color: #FFF;
    cursor: pointer;

    &:hover {
    background: #005d8c;
    transition: background 0.1s;
  }
  }
`;

export const ProductListItem = styled.li`
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    color: #222;
    border-radius: 5px;
    background: #eee;
    padding: 10px;
    min-width: 70vmin;
    text-decoration: none;

      &:hover {
      background: #d4d4d4;
      transition: background 0.1s;
    }

  }
`;
