import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #EEE;
`;

export const ProductListItem = styled.li`
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  a {
    color: #222;
    border-radius: 5px;
    background: #eee;
    padding: 10px;
    text-decoration: none;

      &:hover {
      background: #d4d4d4;
      transition: background 0.1s;
    }

  }
`;
