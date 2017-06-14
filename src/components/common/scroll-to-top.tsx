import * as React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<any, object> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <div> {this.props.children} </div>;
  }
}

export default withRouter(ScrollToTop);