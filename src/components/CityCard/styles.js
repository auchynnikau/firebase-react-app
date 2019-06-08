import styled from 'styled-components';
import * as palette from '../../styles/colors';
import * as fonts from '../../styles/fonts';
import {Jumbotron} from 'react-bootstrap';

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
  font-size: ${fonts.medium};
  color: ${palette.white};
`;

export const Description = styled.p`
  padding: 1rem 2rem;
  font-size: ${fonts.small};
  color: ${palette.white};
  background: ${palette.opacityBlack};
`;

export const ButtonWrapper = styled.div`
  width: max-content;
`;
