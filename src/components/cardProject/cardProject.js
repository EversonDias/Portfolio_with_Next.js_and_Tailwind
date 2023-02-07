import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.header};
  box-shadow: 2px 2px 4px #00000050;
  margin: 10px;
  :hover{
    transform: scale(1.04);
    transition: 400ms;
    background-color: ${(props) => props.theme.color.select};
  }
`;

export default Container;
