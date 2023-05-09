import styled from 'styled-components';

const Container = styled.header`
background: ${props => props.theme.color.header};
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
font-family: 'Ultra', serif;
nav {
  display: flex;
  align-items: center;
}
.LinksHeader{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  width: 125px;
  text-decoration: none;
  color: ${props => props.theme.color.highlights};
  text-shadow: -3px 4px 20px ${props => props.theme.color.header};
}
.LinksHeader:hover {
  transition: 250ms;
  background-color: ${props => props.theme.color.background};
}

@media screen and (min-width: 640px) {
  .logo:hover{
  transition: 250ms;
  background-color: ${props => props.theme.color.background};
}
}
@media screen and (max-width: 640px) {
  /* justify-content: space-around; */
  .navBar {
    display: none;
  }
  
}
`;

export default Container;
