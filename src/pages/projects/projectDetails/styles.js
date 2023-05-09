import styled from 'styled-components';

const Container = styled.div`
min-height: 90vh;
ul {
  list-style: none;
}
li {
  text-align: center;
}
.containerImg {
  margin-top: 20px;
}
.containerImg img {
  width: 500px;
}
.container {
  margin: 5px auto;
  background-color: ${props => props.theme.color.header};
  padding: 10px;
  width: 60%;
  border-radius: 6px;
}
.title {
  color: ${props => props.theme.color.highlights};
  font-size: 1.5rem;
  margin-bottom: 5px;
}
.content {
  text-decoration: none;
  font-size: 1.3rem;
  color: ${props => props.theme.color.font};
}
.containerLinks {
  display: flex;
  justify-content: space-evenly;
}
@media screen and (max-width:660px) {
  .containerImg img {
  width: 300px;
  }
  .container {
    width: 80%;
  }
}
`;
export default Container;
