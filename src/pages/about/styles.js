import styled from 'styled-components';

const Container = styled.div`
text-align: center;
.imgHome{
  margin: auto;
  margin-top: 20px;
  width: 200px;
  border-radius: 50%;
  padding: 7px;
  border: solid 7px ${props => props.theme.color.highlights};
}
.containerAbout{
  margin: auto;
  margin-top: 20px;
  background-color: ${props => props.theme.color.header};
  padding: 10px;
  width: 90%;
  border-radius: 6px;
  box-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
}
  .titleAbout {
    color: ${props => props.theme.color.highlights};
    text-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
    padding: 5px;
  }
  .pAbout {
    text-align: justify;
    text-indent: 10px;
    color: ${props => props.theme.color.font};
    padding: 2px;
  }
  .containerTecnologia {
    margin: auto;
    margin-top: 50px;
    background-color: ${props => props.theme.color.header};
    padding: 10px;
    width: 90%;
    border-radius: 6px;
    box-shadow: 11px 16px 20px 2px ${props => props.theme.color.shadow};
  }
  .titleTecnologia {
    padding: 10px;
    text-align: center;
    color: ${props => props.theme.color.highlights};
  }
  .containerIcons {
    display: flex;
    justify-content: space-between;
  }
  .containerIcons > i {
    font-size: 50px;
    color: ${props => props.theme.color.highlights};
  }
`;

export default Container;
