import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70%;
margin: 50px auto;
.containerFilters {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.listFilters {
  display: flex;
  list-style: none;
}
.buttonFilter {
  margin: 5px;
  padding: 5px;
  border: none;
  border-radius: 6%;
  background-color: ${props => props.theme.color.header};
  color:  ${props => props.theme.color.font};
}
.buttonFilter:hover {
  background-color: ${props => props.theme.color.highlights};
}
.containerProjects {
  display: flex;
  flex-wrap: wrap;
}
`;
export default Container;
