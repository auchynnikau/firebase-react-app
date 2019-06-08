import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {YMaps, Placemark} from 'react-yandex-maps';
import {Gallery} from '../../components/Gallery/Gallery';

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

export class SightInfo extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
    const {sight} = this.props;

    return (
      sight ?
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
      : <Title>Loading...</Title>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const sights = state.firestore.data.sights;
  const sight = sights ? sights[id] : null;

  return {sight: sight}
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'sights'}])
)(SightInfo);
