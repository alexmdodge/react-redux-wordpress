import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { updatePostRange } from '../../actions/index';

import './post-range-picker.css';

export interface Props {
  validMonths: any;
  updatePostRange(date: string): any;
}

class PostRangePicker extends React.Component<Props, any> {
  renderRangeList = (): any => {
    let months = [];
    const currentMonth = moment(this.props.validMonths.max).endOf('month');
    const endMonth = moment(this.props.validMonths.min).startOf('month');
    while (currentMonth.format('x') > endMonth.format('x')) {
      months.push(moment(currentMonth));
      currentMonth.subtract(1, 'month');  
    }
    console.log(months);
    return months.map(month => (
      <li 
        key={month.format('MMMM YYYY')}
        onClick={() => this.props.updatePostRange(month.format())}
        className="range-picker__item"
      >
        {month.format('MMMM YYYY')}
      </li>
    ));
  }
  
  render() {
    console.log(this.props.validMonths);
    return (
      <ul className="range-picker">
        <li className="range-picker__item">
          All Posts
        </li>
        {this.renderRangeList()}
      </ul>
    );
  }
}

function mapStateToProps({ ui }: WP.StoreState): object {
  return { validMonths: ui.postsFilter.validMonths };
}

export default connect<any, any, Props>(mapStateToProps, { updatePostRange })(PostRangePicker);