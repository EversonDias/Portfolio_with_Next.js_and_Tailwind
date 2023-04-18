import styled from 'styled-components';

const Container = styled.picture`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

.imgHome{
  margin: 50px;
  width: 300px;
  border-radius: 50%;
  padding: 7px;
  border: solid 7px ${props => props.theme.color.highlights};
}

.containerText{
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 10px;
  font-size: 60px;
  text-shadow: -3px 4px 20px ${props => props.theme.color.header};
  color: ${props => props.theme.color.highlights}
}

.describe {
  margin: 5px;
  font-size: 30px;
  color: ${props => props.theme.color.font};
  text-shadow: -3px 4px 20px ${props => props.theme.color.header};
}
`;

export default Container;
