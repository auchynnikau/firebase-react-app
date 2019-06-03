import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import firstImg from '../../assets/carousel-bg/1.jpg';
import secondImg from '../../assets/carousel-bg/2.jpg';
import thirdImg from '../../assets/carousel-bg/3.jpg';
import fourthImg from '../../assets/carousel-bg/4.jpg';
import fifthImg from '../../assets/carousel-bg/5.jpg';
import sixthImg from '../../assets/carousel-bg/6.jpg';
import seventhImg from '../../assets/carousel-bg/7.jpg';

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
  background: #000000ab;
  text-align: left;
`;

export const Heading = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: #ffffff;
`;

export const FirstItem = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${firstImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const SecondItem = styled(FirstItem)`
  background: url(${secondImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ThirdItem = styled(FirstItem)`
  background: url(${thirdImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const FourthItem = styled(FirstItem)`
  background: url(${fourthImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const FifthItem = styled(FirstItem)`
  background: url(${fifthImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const SixthItem = styled(FirstItem)`
  background: url(${sixthImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const SeventhItem = styled(FirstItem)`
  background: url(${seventhImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
