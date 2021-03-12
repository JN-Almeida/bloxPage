import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  color: #fff;

  .card-header{
    background-color: ${(props) => props.color2};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .date-limit {
      span {
        font-size: 0.7em;
      }
    }
  }
  .card-infos{
    padding: 10px;
    .grid{
      display: flex;
      align-items: center;
      gap: 10px;

      img{
        width: 50px;
        background-color: ${(props) => props.color2};
        border-radius: 10px;
      }
      span{
        font-size: .7em
      }
    }
  }
  .card-bottom{
    background-color: ${(props) => props.color2};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    height: 56px;
    .circle{
      padding: 5px;
      border-radius: 100%;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      width: 37px;
      height: 37px;
      background-color: ${(props) => props.color};
      &:not(first-child){
        margin-right: -7px;
      }
    }
  }
`;
