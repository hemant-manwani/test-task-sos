import * as React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { LOGIN_ROUTE, TIMELINE_ROUTE } from '../../constants/Routes';

export class AuthenticatedComponent extends React.Component {

  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.props.requiresLogin) {
      if (!this.props.isLoggedIn) {
        browserHistory.replace(LOGIN_ROUTE);
      }
    } else if (this.props.isLoggedIn) {
      browserHistory.replace(TIMELINE_ROUTE);
    }
  }

  showComponent() {
    return this.props.isLoggedIn === this.props.requiresLogin;
  }

  render() {
    const ChildComponent = this.props.child;
    return this.showComponent() ? <ChildComponent {...this.props} /> : <div />;
  }
}

AuthenticatedComponent.propTypes = {
  child: React.PropTypes.any.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  requiresLogin: React.PropTypes.bool.isRequired,
};

const requireAuthentication = (childComponent, requiresLogin) => {
  const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn,
    child: childComponent,
    requiresLogin,
  });

  return connect(mapStateToProps, null)(AuthenticatedComponent);
};

export default requireAuthentication;
