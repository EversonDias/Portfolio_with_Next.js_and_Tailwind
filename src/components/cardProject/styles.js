import styled from 'styled-components';

const Container = styled.button`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.theme.color.header};
  box-shadow: 2px 2px 4px ${props => props.theme.color.shadow};
  margin: 10px;
  text-align: center;
  :hover{
    transform: scale(1.04);
    transition: 500ms;
    background-color: ${props => props.theme.color.select};
    box-shadow: 7px 7px 15px ${props => props.theme.color.shadow};
  }
  .imgCard {
    width: 100%;
    height: 178px;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
  }
  .title {
    padding: 2px;
    color: ${props => props.theme.color.font};
    font-weight: 600;
  }
`;

export default Container;
