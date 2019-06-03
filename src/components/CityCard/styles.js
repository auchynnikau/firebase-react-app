import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const StyledJumbotron = styled(Jumbotron)`
  height: 30rem;
  margin: 0 10% 1rem 10%;
  padding: 2.5% 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &:hover {
    box-shadow: 0.3rem 0.3rem 1rem rgb(161, 161, 161);
    transition: all 300ms ease;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  color: #ffffff;
  background: #000000ab;
`;
