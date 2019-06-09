import styled from 'styled-components';
import * as fonts from '../../styles/fonts';
import * as palette from '../../styles/colors';
import {Jumbotron} from 'react-bootstrap';

export const StyledJumbotron = styled(Jumbotron)`
  height: 30rem;
  margin: 0 10% 1rem 10%;
  padding: 2.5% 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background:
    linear-gradient(to top, ${palette.opacityBlackout},
    transparent 100%), url(${props => props.src});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  &:hover {
    box-shadow: 0.3rem 0.3rem 1rem rgb(161, 161, 161);
    transition: all 300ms ease;
  }

  @media (max-width: 767px) {height: 20rem};
  @media (max-width: 767px) and (orientation: portrait) {height: 30rem};
`;

export const Title = styled.h1`
  border: 0.1rem solid ${palette.white};
  font-size: ${fonts.big};
  color: ${palette.white};
  text-align: center;
`;
