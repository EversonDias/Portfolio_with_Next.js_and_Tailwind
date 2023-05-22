import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.color.header};
height: 70px;
.icons {
  color: ${props => props.theme.color.highlights};
  font-size: 30px;
  margin: 8px;
}
@media screen and (min-width:660px) {
  a:hover {
    background-color: ${props => props.theme.color.background};
  }
  }
`;
export default Container;
