import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.scss';

export const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item className='carousel__item'>
        <div className='carousel__first-item item item--background'></div>
        <Carousel.Caption className='carousel__caption caption'>
          <div className='caption__container container container--style'>
            <h2 className='carousel__heading heading heading--second-style'>Mauris at</h2>
            <h1 className='carousel__heading heading heading--style'>First slide label</h1>
            <p className='carousel__description description description--style'>
              Proin imperdiet leo ut mauris tempor consectetur in in massa.
              Fusce euismod urna sit amet leo euismod egestas.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel__item'>
        <div className='carousel__second-item item item--background'></div>
        <Carousel.Caption className='carousel__caption caption'>
          <div className='caption__container container container--style'>
            <h2 className='carousel__heading heading heading--second-style'>Mauris at</h2>
            <h1 className='carousel__heading heading heading--style'>First slide label</h1>
            <p className='carousel__description description description--style'>
              Proin imperdiet leo ut mauris tempor consectetur in in massa.
              Fusce euismod urna sit amet leo euismod egestas.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel__item'>
        <div className='carousel__third-item item item--background'></div>
        <Carousel.Caption className='carousel__caption caption'>
          <div className='caption__container container container--style'>
            <h2 className='carousel__heading heading heading--second-style'>Mauris at</h2>
            <h1 className='carousel__heading heading heading--style'>First slide label</h1>
            <p className='carousel__description description description--style'>
              Proin imperdiet leo ut mauris tempor consectetur in in massa.
              Fusce euismod urna sit amet leo euismod egestas.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel__item'>
        <div className='carousel__fourth-item item item--background'></div>
        <Carousel.Caption className='carousel__caption caption'>
          <div className='caption__container container container--style'>
            <h2 className='carousel__heading heading heading--second-style'>Mauris at</h2>
            <h1 className='carousel__heading heading heading--style'>First slide label</h1>
            <p className='carousel__description description description--style'>
              Proin imperdiet leo ut mauris tempor consectetur in in massa.
              Fusce euismod urna sit amet leo euismod egestas.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel__item'>
        <div className='carousel__fifth-item item item--background'></div>
        <Carousel.Caption className='carousel__caption caption'>
          <div className='caption__container container container--style'>
            <h2 className='carousel__heading heading heading--second-style'>Mauris at</h2>
            <h1 className='carousel__heading heading heading--style'>First slide label</h1>
            <p className='carousel__description description description--style'>
              Proin imperdiet leo ut mauris tempor consectetur in in massa.
              Fusce euismod urna sit amet leo euismod egestas.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
