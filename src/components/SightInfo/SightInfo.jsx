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
          {sight.content.map(paragraph =>
            <p>
              {paragraph}
            </p>
          )}
        </Content>
        <Gallery images={sight.images} />

        <Content>
          <Title>Карта местоположения</Title>
        </Content>
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
