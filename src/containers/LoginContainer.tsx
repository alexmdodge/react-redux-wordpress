import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

/* Actions and Utilities */
import { getRequestToken } from '../actions';

/* Local Imports */
import { Login } from '../components/admin';

interface Props extends RouteComponentProps<any> {
  getRequestToken(): void;
}

class LoginContainer extends React.Component<Props, object> {
  componentDidMount() {
    this.props.getRequestToken();
  }
  
  render() {
    return (
      <Login />
    );
  }
}

function mapStateToProps({ auth }: WP.StoreState) {
  return { auth };
}

export default connect(mapStateToProps, { getRequestToken })(LoginContainer);