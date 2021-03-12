import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .wrapper{
    max-width: 1300px;
    padding: 0 15px;
  }
  .header{
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .filters{
      input{
        border: none;
        border-bottom: 1px solid #ccc;
        border-radius: 0;
      }
    }
  }

  .card-list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-bottom: 60px;
    margin-top: 30px;
    @media(max-width:800px){
      grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 680px){
      grid-template-columns: 1fr;
    }
  }
`;
