import styled from 'styled-components';
import * as fonts from '../../styles/fonts';
import * as palette from '../../styles/colors';
import {Carousel} from 'react-bootstrap';

export const CarouselCaption = styled(Carousel.Caption)`
  bottom: 10%;
  display: flex;
  justify-content: flex-start;
`;

export const CaptionWrapper= styled.div`
  height: min-content;
  width: 75%;
  margin: 0;
  padding: 1.6rem;
  background: ${palette.opacityBlack};
  text-align: left;
`;

export const Heading = styled.h1`
  font-size: ${fonts.huge};
  font-weight: 600;
  color: ${palette.white};
`;

export const Description = styled.p`
  font-size: ${fonts.medium};
  color: ${palette.white};
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
