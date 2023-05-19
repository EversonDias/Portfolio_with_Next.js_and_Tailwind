import styled from 'styled-components';

const Container = styled.div`
min-height: 90vh;
display: flex;
justify-content: space-evenly;
@media screen and (max-width: 640px) {
  .imgDesktop {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .imgDesktop {
    display: none;
  }
}
`;
export default Container;
