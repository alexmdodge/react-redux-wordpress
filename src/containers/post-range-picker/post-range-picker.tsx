import * as React from 'react';
import { connect } from 'react-redux';
import { updatePostRange } from '../../actions/index';

export interface Props {
  postRange: any;
  updatePostRange(): void;
}

class PostRangePicker extends React.Component<Props, object> {
  render() {
    console.log(this.props.postRange);
    return (
      <div> Post Range Picker Here </div>
    );
  }
}

function mapStateToProps({ ui }: WP.StoreState ) {
  return { postRange: ui.postRange };
}

export default connect<any, any, Props>(mapStateToProps, { updatePostRange })(PostRangePicker);