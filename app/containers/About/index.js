/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import TeamPic from './image.jpg';

export default class AboutUsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
          <meta
            name="description"
            content="AboutUs page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          About Us
        </H1>
        <p> Sex.E provides sexual health and gender-based violence education through live sketch comedy shows and online content. 

Our team is comprised of comedians and educators that joined forces to create more engaging content. After the development of 
the first program in 2015, we have worked to improve the content to enhance audience engagement. Three years and fifteen thousand 
students later, Sex.E is ready to bring Cal Poly's original gender based violence education to your university or educational institution.
</p>
      <img src = {TeamPic} width = "700" height = "400" align = "middle"/> 
      </div>
    );
  }
}
