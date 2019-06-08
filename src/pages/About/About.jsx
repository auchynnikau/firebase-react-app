import * as React from 'react';

import sass from '../../assets/technologies/sass.svg';
import redux from '../../assets/technologies/redux.svg';
import react from '../../assets/technologies/react.svg';
import firebase from '../../assets/technologies/firebase.svg';
import javascript from '../../assets/technologies/javascript.svg';
import styledcomponents from '../../assets/technologies/styledcomponents.png';
import nodejs from '../../assets/technologies/nodejs.svg';

import skype from '../../assets/icons/skype.svg';
import github from '../../assets/icons/github.svg';
import gmail from '../../assets/icons/gmail.svg';

import {
  Image,
  HeadingWrapper,
  Heading,
  Content,
  Title,
  Paragraph,
  Technologies,
  Technology,
  Icon,
  Item,
} from './styles';

export const About = () => {
  const background = 'https://34travel.me/media/upload/images/2018/august/transport-minsk/IMG_4450.jpg';

  return (
    <section>
      <Image src={background}>
        <HeadingWrapper>
          <Heading>
            О сайте
          </Heading>
        </HeadingWrapper>
      </Image>
      <Content>
        <Title>Описание:</Title>
        <Paragraph>
          Данное приложение было разработано в качестве дипломного проекта, 
          темой которого является "Разработка сайта-путеводителя по достопримечательностям 
          Республики Беларусь".
        </Paragraph>
        <Paragraph>
          Данный проект нацелен на привлечение внимания к исторически важным местам Республики Беларусь 
          как у жителей страны, так и у туристов. Здесь собраны красивые фотографии и актуальная информация 
          о городах и достопримечательностях, что позволит пользователям сайта узнать много нового и интересного.
        </Paragraph>
        <Title>Технологии:</Title>
        <Technologies>
          <Technology src={react} />
          <Technology src={redux} />
          <Technology src={javascript} />
          <Technology src={firebase} />
          <Technology src={styledcomponents} />
          <Technology src={sass} />
          <Technology src={nodejs} />
        </Technologies>
        <Title>Обратная связь:</Title>
        <Paragraph>
          <Item>
            <Icon src={skype} />
            <p>live:3642519597c497ad</p>
          </Item>
          <Item>
            <Icon src={github} />
            <p>AuchynnikauViachaslau</p>
          </Item>
          <Item>
            <Icon src={gmail} />
            <p>minnuteman@gmail.com</p>
          </Item>
        </Paragraph>
      </Content>
    </section>
  )
}
