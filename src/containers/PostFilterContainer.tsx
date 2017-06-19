import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {

}

interface State {

}

class PostFilterContainer extends React.Component<Props, State> {
  render() {
    return (
      <div> Post Filter Container </div>
    );
  }
}

function mapStateToProps(state: WP.StoreState) {
  return {
    state
  };
}

export default connect(mapStateToProps)(PostFilterContainer);