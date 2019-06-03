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

const SightInfo = (props) => {
  const { sight } = props;

  if (sight) {
    return (
      <section>
        <Image src={sight.image}>
          <HeadingWrapper>
            <Heading>
              {sight.title}
            </Heading>
          </HeadingWrapper>
        </Image>
        <Content>
          {sight.content.map(item =>
            <React.Fragment>
              <Title>{item.title}</Title>
              {item.paragraph.map(paragraph =>
                <Paragraph>{paragraph}</Paragraph>
              )}
            </React.Fragment>
          )}
        </Content>
        <Gallery images={sight.images} />
        <MapTitle>
          <Title>Карта местоположения</Title>
        </MapTitle>
        <YMaps>
          <StyledMap defaultState={{
            center: sight.coordinates,
            zoom: 15,
          }}>
            <Placemark geometry={sight.coordinates} />
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
  const sights = state.firestore.data.sights;
  const sight = sights ? sights[id] : null;

  return {
    sight: sight
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'sights'
  }])
)(SightInfo);
