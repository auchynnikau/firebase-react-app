import styled from 'styled-components';
import * as fonts from '../../styles/fonts';
import * as palette from '../../styles/colors';
import {Map} from 'react-yandex-maps';

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const HeadingWrapper = styled.div`
  height: 50%;
  width: 100%;
  padding: 1.8rem;
  display: flex;
  align-items: flex-end;
  text-align: left;
  background: linear-gradient(to top, ${palette.black}, transparent 100%);
`;

export const Heading = styled.h1`
  padding: 0 10%;
  font-size: ${fonts.large};
  font-weight: 600;
  color: ${palette.white};
`;

export const Content = styled.div`
  padding: 5% 20%;
  font-size: ${fonts.small};
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: ${fonts.big};
  color: ${palette.black};

  :not(:first-child) {
    margin-top: 5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${fonts.small};
  color: ${palette.black};
`;

export const MapTitle = styled(Content)`
  padding: 3% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMap = styled(Map)`
  height: 25rem;
  width: 100%;
`;
