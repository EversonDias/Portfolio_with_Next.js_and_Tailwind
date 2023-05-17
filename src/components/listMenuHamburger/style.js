import styled from 'styled-components';

const Container = styled.div`
.listMenu {
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.color.background};
box-shadow: 7px 7px 15px ${props => props.theme.color.shadow};
transition: 250ms;
}
.listMenuOff{
  position: fixed;
  height: 93vh;
  width: 0;
  right: 0;
  top: 50px;
}
.listMenuOn{
position: fixed;
z-index: 1;
height: 100vh;
width: 80%;
right: 0;
top: 50px;
}
button {
  background-color: ${props => props.theme.color.header};
  box-shadow: 7px 7px 15px ${props => props.theme.color.shadow};
  border: none;
  border-radius: 6px;
  margin: 10px;
  width: 80%;
}
button a {
  text-decoration: none;
  font-size: 50px;
  font-weight: 500;
  color: ${props => props.theme.color.highlights};
}
.toggle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px;
  border-radius: 6px;
  background-color: ${props => props.theme.color.header};
  box-shadow: 7px 7px 15px ${props => props.theme.color.shadow};
}
.toggle p {
  font-size: 50px;
  font-weight: 500;
  margin-right: 20px;
  color: ${props => props.theme.color.highlights};
}
@media screen and (min-width: 639px) {
.listMenu {
  display: none;
}
}
`;

export default Container;
