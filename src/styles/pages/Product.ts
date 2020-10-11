import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #909090;
  border-radius: 10px;
  padding: 40px;
  margin: 6rem 4rem;

  @media(max-width: 760px) {
    flex-direction: column
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 37vmin;
    border: 15px solid #fff;
    border-radius: 10px;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 50px;
  color: #111;

  @media(max-width: 760px) {
    margin-left: 0px;
  }

  div {
    margin-top: 80px;
    max-width: 300px;
    min-width: 150px;

    @media(max-width: 760px) {
      margin-top: 50px;
    }
  }

  h3 {
    margin-top: 100px;

    @media(max-width: 760px) {
      margin-top: 50px;
    }
  }
`;

