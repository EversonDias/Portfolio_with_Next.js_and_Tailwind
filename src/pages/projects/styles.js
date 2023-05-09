import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 90vh;
.containerFilters {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 20px;
}
.listFilters {
  display: flex;
  list-style: none;
  text-align: center;
}
.buttonFilter {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 50px;
  border: none;
  font-size: 1.5rem;
  background: transparent;
  color:  ${props => props.theme.color.font};
}
.containerButton:hover {
  background-color: ${props => props.theme.color.highlights};
  transition: 250ms;
}
.containerProjects {
  display: flex;
  width: 80%;
  justify-content: start;
  flex-wrap: wrap;
}
  .buttonFilter p {
    font-size: 0.7rem;
  }
  .buttonFilter i {
    position: relative;
    z-index: -1;
  }
  .containerButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.color.header};
    width: 60px;
    height: 50px;
    margin: 5px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
  }
  @media screen and (max-width:660px) {
    .containerProjects {
      justify-content: center;
    }
  }
`;
export default Container;
