import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
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
`;

export const Title = styled.h1`
  color: #EEE;
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
    text-decoration: none;
    min-width: 70vmin;

      &:hover {
      background: #d4d4d4;
      transition: background 0.1s;
    }

  }
`;
