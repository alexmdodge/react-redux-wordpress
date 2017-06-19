import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {

}

interface State {

}

class LoginContainer extends React.Component<Props, State> {
  render() {
    return (
      <div> Login Login Container </div>
    );
  }
}

function mapStateToProps(state: WP.StoreState) {
  return {
    state
  };
}

export default connect(mapStateToProps)(LoginContainer);