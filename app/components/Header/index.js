import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar';
import Img from '../Img'
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="">
          <img src="/banner.jpg" alt="Sex.E - Logo" width="100" height="100" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            Call SafeRide
          </HeaderLink>
          <HeaderLink to="/features">
            Buddy System Map
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
