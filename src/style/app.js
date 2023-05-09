import styled from 'styled-components';

const Container = styled.main`
background: ${props => props.theme.color.background};
min-height: 100vh;
position: relative;
`;

export default Container;
