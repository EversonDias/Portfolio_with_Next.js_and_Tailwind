import styled from 'styled-components';

const Container = styled.header`
background: ${props => props.theme.color.header};
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
`;

export default Container;
