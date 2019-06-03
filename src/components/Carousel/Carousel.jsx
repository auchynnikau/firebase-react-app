import * as React from 'react';
import { Carousel } from 'react-bootstrap';

import {
  CarouselCaption,
  CaptionWrapper,
  Heading,
  Description,
  FirstItem,
  SecondItem,
  ThirdItem,
  FourthItem,
  FifthItem,
  SixthItem,
  SeventhItem,
} from './styles';

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <FirstItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Беларусь
            </Heading>
            <Description>
              Страна с древней историей и богатыми традициями, с великолепной природой 
              и удивительной архитектурой.
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <SecondItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Минск
            </Heading>
            <Description>
              Столица страны и просто современный город, который славится монументальной сталинской архитектурой. 
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <ThirdItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Могилев
            </Heading>
            <Description>
              Город на живописных берегах Днепра, который однажды чуть не стал столицей.
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <FourthItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Витебск
            </Heading>
            <Description>
              Один из немногих городов, который может похвастаться не только историческим наследием, 
              но и богатыми традициями, которые испокон веков передаются из поколения в поколение.
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <FifthItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Гомель
            </Heading>
            <Description>
              Один из красивейших городов Беларуси, обладающий богатейшим историческим, 
              культурным и научным потенциалом, имеющий свой неповторимый облик и стиль.
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <SixthItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Гродно
            </Heading>
            <Description>
              Культурная столица Беларуси, столица беларусского католицизма, 
              вторая столица Беларусской Народной Республики и третья столица Речи Посполитой
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <SeventhItem />
        <CarouselCaption>
          <CaptionWrapper>
            <Heading>
              Брест
            </Heading>
            <Description>
              Между Беловежской пущей и Брестской крепостью, на самой границе Беларуси и Польши, 
              находится Брест – город с богатой и сложной историей.
            </Description>
          </CaptionWrapper>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
}
