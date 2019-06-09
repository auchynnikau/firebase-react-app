import * as React from 'react';
import {Carousel} from 'react-bootstrap';
import {carouselData} from '../../mocks/carouselData';

import {
  CarouselCaption,
  CaptionWrapper,
  Heading,
  Description,
  Background,
} from './styles';

export class MainPage extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
    return (
      <Carousel>
        {carouselData.map(item =>
          <Carousel.Item key={item.id} >
            <Background src={item.image} />
            <CarouselCaption>
              <CaptionWrapper>
                <Heading>
                  {item.title}
                </Heading>
                <Description>
                  {item.description}
                </Description>
              </CaptionWrapper>
            </CarouselCaption>
          </Carousel.Item>
        )}
      </Carousel>
    )
  }
};
