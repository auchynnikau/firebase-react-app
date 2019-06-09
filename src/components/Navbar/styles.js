import styled from 'styled-components';
import * as palette from '../../styles/colors';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';

export const NavMenu = styled(Navbar)`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background: ${palette.opacityBlackout};
`;

export const Logo = styled.div`
  height: 2rem;
  width: 2rem;
  margin-right: 0.3rem;
  background: url(${props => props.src});
`;

export const CollapseContainer = styled(Navbar.Collapse)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {flex-direction: row};
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
  };
`;

export const AuthForm = styled(Nav)``;
export const NavForm = styled(Form)`
  margin-right: 0;
  display: flex;
  align-items: center;
`;

export const ProfileNav = styled(Nav)`
  display: flex;
  align-items: center;
`;

export const SignButton = styled(Button)`
  margin-left: 0.5rem;
`;

export const Initials = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.black};
  color: ${palette.gray};
  border-radius: 50%;
`;
