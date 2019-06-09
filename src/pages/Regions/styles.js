import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as fonts from '../../styles/fonts';
import * as palette from '../../styles/colors';

export const List = styled.section`
  margin-top: 5.5rem;
`;

export const Title = styled.h2`
  margin: 0 0 2rem 10%;
  font-size: ${fonts.big};
  color: ${palette.black};
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
`;
