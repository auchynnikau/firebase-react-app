import styled from 'styled-components';
import { Map } from "react-yandex-maps";

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
  background: linear-gradient(to top, #000000, transparent 100%);
`;

export const Heading = styled.h1`
  padding: 0 10%;
  font-size: 4rem;
  font-weight: 600;
  color: #ffffff;
`;

export const Content = styled.div`
  padding: 5% 20%;
  font-size: 1.4rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: #000000;
`;

export const StyledMap = styled(Map)`
  height: 25rem;
  width: 100%;
`;
