/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HeaderLink from '../../components/Header/HeaderLink';
import NavBar from '../../components/Header/NavBar';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Sex.E</title>
          <meta
            name="description"
            content="Homepage"
          />
        </Helmet>

        <div>
          <CenteredSection>
            <H2 >
            Our Mission: To reduce gender-based violence through engaging education.
            </H2>
            <div>
    <img width="700" 
      src="https://static1.squarespace.com/static/5b1ad00396e76f6684f7c766/t/5b1af1420e2e7242ed86c8fa/1529955967573/Screen+Shot+2018-05-03+at+3.39.20+PM.png?format=1000w"/> 
            </div>
        <p>
            <b>  What We Do: </b>
        </p>
            <p>
            Sex.E provides sexual health and gender-based violence education through live sketch comedy shows and online content.
            </p>
  
         

          <img width="700"
           src="https://static1.squarespace.com/static/5b1ad00396e76f6684f7c766/t/5b3146e6575d1f8eeeed130d/1530151422147/Picture2.png?format=2500w"/>

           <p>
            <b>  Our Beginning: </b>
        </p>
            <p style={{    
              fontfamily: 'Tahoma',
             
          }}>
           
Sex.E began at Cal Poly SLO in 2015 as a collaboration between the on campus advocacy group, Safer, and the improv comedy team. After several years of searching for an engaging gender based violence program, Christina Kaviani, the director of Safer, reached out to the improv team to work together to create their own.  The first sketch comedy program debuted during Cal Poly's Week of Welcome orientation program in September 2015. 
            </p>

          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
