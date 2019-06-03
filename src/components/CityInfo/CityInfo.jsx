import * as React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Gallery } from '../Gallery/Gallery';
import { YMaps, Placemark } from "react-yandex-maps";

import {
  Image,
  HeadingWrapper,
  Heading,
  Content,
  Title,
  Paragraph,
  MapTitle,
  StyledMap,
} from './styles.js';

const CityInfo = (props) => {
  const { city } = props;

  if (city) {
    return (
      <section>
        <Image src={city.image}>
          <HeadingWrapper>
            <Heading>
              {city.title}
            </Heading>
          </HeadingWrapper>
        </Image>
        <Content>
          {city.content.map(item =>
            <React.Fragment>
              <Title>{item.title}</Title>
              {item.paragraph.map(paragraph =>
                <Paragraph>{paragraph}</Paragraph>
              )}
            </React.Fragment>
          )}
        </Content>
        <Gallery images={city.images} />
        <MapTitle>
          <Title>Карта местоположения</Title>
        </MapTitle>
        <YMaps>
          <StyledMap defaultState={{
            center: city.coordinates,
            zoom: 9,
          }}>
            <Placemark geometry={city.coordinates} />
          </StyledMap>
        </YMaps>
      </section>
    );
  } else {
    return (
      <p>Loading...</p>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cities = state.firestore.data.cities;
  const city = cities ? cities[id] : null;

  return {
    city: city
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'cities'
  }])
)(CityInfo);
