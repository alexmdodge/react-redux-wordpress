import * as React from 'react';
import { connect } from 'react-redux';
import { updatePostRange } from '../../actions/index';

export interface Props {
  validRange: any;
  updatePostRange(): void;
}

class PostRangePicker extends React.Component<Props, any> {
  render() {
    console.log(this.props.validRange);
    return (
      <div> Post Range Picker Here </div>
    );
  }
}

function mapStateToProps({ ui }: WP.StoreState): object {
  return { validRange: ui.validRange };
}

export default connect<any, any, Props>(mapStateToProps, { updatePostRange })(PostRangePicker);