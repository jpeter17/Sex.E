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
import ListItemTitle from './ListItemTitle';
import Image from './image.jpg';

export default class Impact extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
	<center>
	<img src={Image} />
	    </center>
	<center>
        <H1>
          Impact
        </H1>
	</center>
        <List>
          <ListItem>
            <ListItemTitle>
	    	Why Comedy?
            </ListItemTitle>
            <p>
	    	The sketch comedy approach allows the audience to lower their guard and better absorb the information. It also breaks the ice for further conversations about sex and ger based violence.
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
	    	The Sex.E Show 
            </ListItemTitle>
            <p>
	    	has been effective in multiple qualitative assessments for the past three years. The on-campus advocacy group, Safer, has seen a 45% increase in service requests for education and advocacy since 2015. This increase coincides with the education provided by Sex E. When asked how they first heard about Safer, students overwhelmingly credited Sexx.E as their introduction to on-campus resources. 
            </p>
          </ListItem>

        </List>
      </div>
    );
  }
}
