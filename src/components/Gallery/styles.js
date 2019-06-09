import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (max-width: 767px) {height: 100vh};
  @media (max-width: 767px) and (orientation: portrait) {height: 50vh};
`;
