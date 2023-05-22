import styled from 'styled-components';

const Container = styled.div`
@media screen and (min-width: 641px) {
  display: none;
}
@media screen and (max-width: 640px){
  .hamburgerLine {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 26px;
}
}
.line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: ${props => props.theme.color.highlights};
}
.line1{
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}
.line2{
  transition: transform 0.2s ease-in-out;
}
.line3{
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}
.line1Move{
  transform: rotate(45deg);
}
.line2Move{
  transform: scaleY(0);
}
.line3Move{
  transform: rotate(-45deg);
}
`;

export default Container;
