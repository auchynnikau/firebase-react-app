import * as React from 'react';
import {contactData} from '../../mocks/contactData';
import {technologiesData} from '../../mocks/technologiesData';

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

export class About extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
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
            {technologiesData.map((technology, id) =>
              <Technology key={id} src={technology} />
            )}
          </Technologies>
          <Title>Обратная связь:</Title>
            {contactData.map((item, id) =>
              <Item key={id}>
                <Icon src={item.icon} />
                <Paragraph>{item.value}</Paragraph>
              </Item>
            )}
        </Content>
      </section>
    )
  }
}
