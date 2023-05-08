import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
  background: transparent;
  color:  ${props => props.theme.color.font};
}
.buttonFilter:hover {
  background-color: ${props => props.theme.color.highlights};
}
.containerProjects {
  display: flex;
  width: 80%;
  justify-content: start;
  flex-wrap: wrap;
}
.search__input {
        width: 100%;
        padding: 8px;
        font-size: 14px;
        line-height: 18px;
        background-color: white;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 95% center;
        border-radius: 50px;
        border: none;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        margin: 10px;
        &::placeholder {
            text-transform: uppercase;
            /* text-indent: 0.5rem; */
        }
        &:focus {
          color: black;
  background-color: white;
  border-color: ${props => props.theme.color.highlights};
  outline: 0;
  box-shadow: 0 0 0 3px ${props => props.theme.color.highlights};
        }
    }
    .buttonFilter p {
      font-size: 10px;
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
      border-radius: 6%;
      font-size: 20px;
    }
    @media screen and (max-width:660px) {
      .containerProjects {
        justify-content: center;
      }
    }
`;
export default Container;
