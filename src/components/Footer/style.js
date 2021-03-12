import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 -2px 9px 0px #cecece;

  footer{
    padding: 20px 15px;
    max-width: 1300px;
    text-align: center;
    .status{
      margin-left: 30px;
      padding: 10px;
      background-color: #ffffff;
      border-radius: 5px;
      border: 1px solid #cecece;
      transition: .3s;
      box-shadow: 0 0 4px 0px #bbbbbb;
      &:hover, &:focus, &:active{
        transform: translateY(-5px);
        box-shadow: 0 4px 4px 1px #bbbbbb;
        border: 1px solid #cecece;
        outline: none;
      }
      &.${(prop) => prop.active}{
        background-color: #5f8afc;
      }
    }
  }

`;
