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

import { Button } from 'semantic-ui-react';


export default class FeaturePage extends React.Component {
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
        <H1>
          Our Programs
        </H1>
        <p>
          The Sex.E Show is a peer-driven, live sketch comedy program, facilitated by current college students. The interactive and innovative approach to prevention education uses short scenes to highlight core topics.
The show covers topics including consent, dating violence, stalking, and active bystander intervention.
The content can be tailored to best fit the needs of your university, including changes to ensure it meets your state specific requirements for compliance.
        </p>
        <h1>
          High School Show
        </h1>
        <p>
          It's exactly what it sounds like... a show for high schoolers! The show covers consent, healthy relationships, and active bystander intervention. The comprehensive overview of gender based violence education is geared specifically toward high school students.  Additional topics covered include:
        </p>
        <p>
          - Social media's effect on relationships
        </p>
        <p>
          - Stigmas surrounding sex
        </p>
        <p>
          - Healthy friendships 
        </p>
        <h1>
          Additional Programs
        </h1>
        <h4>
          K(no)w More: 
        </h4>
        <p>
          The show focuses specifically on stalking. The goal is to bring awareness to what stalking looks like and what people can do to be active bystanders.
        </p>
        <h4>
          Relationships, Baby:
        </h4>
        <p>
          The show covers various aspects of dating violence. Specific topics include gender roles, the different types of abuse, and how to support survivors.
        </p>
        <h1>
          Corporate
        </h1>
        <p>
          Coming Soon!
        </p>
      </div>
    );
  }
}



