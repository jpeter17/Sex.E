import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar';
import Img from '../Img'
import HeaderLink from './HeaderLink';
import messages from './messages';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (

      <div>
      <Menu>
      <Link to=''>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        </Link>
      <Link to='/about'>
        <Menu.Item
          name='About'

          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to='/programs'>
        <Menu.Item
          name='Programs'
          active={activeItem === 'Programs'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to='/impact'>
        <Menu.Item
          name='Impact'
          active={activeItem === 'Impact'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
        <A href="">
          <img src="/banner.jpg" alt="Sex.E - Logo" width="100" height="100" />
        </A>
        <NavBar>
          <HeaderLink to="tel:5413467433">
            Call SafeRide
          </HeaderLink>
          <HeaderLink to="/map">
            Buddy System Map
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
