import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
min-height: 90vh;
.imgHome{
  margin: auto;
  width: 300px;
  border-radius: 50%;
  padding: 7px;
  border: solid 7px ${props => props.theme.color.highlights};
}
.containerAbout{
  margin: auto;
  background-color: ${props => props.theme.color.header};
  padding: 10px;
  width: 50%;
  border-radius: 6px;
  box-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
}
  .titleAbout {
    color: ${props => props.theme.color.highlights};
    text-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
    padding: 5px;
    font-size: 40px;
  }
  .pAbout {
    text-align: start;
    text-indent: 15px;
    font-size: 20px;
    color: ${props => props.theme.color.font};
    padding: 4px;
  }
  .containerTecnologia {
    margin: auto;
    background-color: ${props => props.theme.color.header};
    padding: 10px;
    width: 50%;
    border-radius: 6px;
    box-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
  }
  .titleTecnologia {
    padding: 10px;
    font-size: 40px;
    text-align: center;
    color: ${props => props.theme.color.highlights};
  }
  .containerIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .containerIcons > i {
    font-size: 50px;
    color: ${props => props.theme.color.highlights};
  }
  @media screen and (max-width:660px) {
    .containerIcons {
      display: grid;
      grid-template-areas: 
      "i i i i";
    }
    .containerIcons i {
      margin: 10px;
      font-size: 2.5rem;
    }
    .containerTecnologia {
      margin-top: 20px;
      margin-bottom: 50px;
      display: flex;
      width: 80vw;
      flex-direction: column;
      align-items: center;
    }
    .titleTecnologia {
      font-size: 1.5rem;
    }
    .containerAbout{
      width: 80vw;
      margin-top: 20px;
    }
    .titleAbout {
      font-size: 1.5rem;
    }
    .pAbout {
      font-size: 1.2rem;
    }
    .imgHome{
      margin-top: 20px;
    }
  }
`;

export default Container;
