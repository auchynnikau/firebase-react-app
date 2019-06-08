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

export class CityInfo extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
    const {city} = this.props;

    return (
      city ?
        <section>
          <Image src={city.image}>
            <HeadingWrapper>
              <Heading>{city.title}</Heading>
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
      : <Title>Loading...</Title>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cities = state.firestore.data.cities;
  const city = cities ? cities[id] : null;

  return {city: city}
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'cities'}])
)(CityInfo);
