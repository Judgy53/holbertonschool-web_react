import React from 'react';
import PropTypes from 'prop-types';

class CourseListRow extends React.Component {
  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;

    let row = null;
    if (isHeader === true) {
      row = textSecondCell === null
        ? <th colSpan="2">{textFirstCell}</th>
        : <><th>{textFirstCell}</th><th>{textSecondCell}</th></>;
    } else {
      row = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;
    }

    return (
      <tr>{row}</tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;
