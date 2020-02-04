import styled from 'styled-components';

export const Container = styled.div`
  padding:8px;
  border: 1px solid #d5d5d5;
`;

export const Image = styled.img`
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #5d5d5d;
`

export const Submit = styled.button.attrs({type:'submit'})`
    height: 32px;
    margin: 8px 0;
    border: 1px solid #bccc59;
    color: #fff;
    background-color: #bccc59;
    border-radius: 4px;

    &:hover{
      background-color: #8b9a2c;
      border-color: #8b9a2c;
    }
`;
