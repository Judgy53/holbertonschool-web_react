import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { css, StyleSheet } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { getCourses } from '../selectors/courseSelector';

export class CourseList extends React.Component {
  static propTypes = {
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func,
    listCourses: PropTypes.instanceOf(List)
  }

  static defaultProps = {
    fetchCourses: () => { },
    selectCourse: () => { },
    unSelectCourse: () => { },
    listCourses: List()
  }

  componentDidMount() {
    const { fetchCourses } = this.props;

    fetchCourses();
  }

  onChangeRow(id, checked) {
    const {selectCourse, unSelectCourse} = this.props;

    if (checked === true) {
      selectCourse(id);
    } else if (checked === false) {
      unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;

    const courseItems = listCourses.map(course =>
      <CourseListRow
        textFirstCell={course.name}
        textSecondCell={course.credit}
        isHeader={false}
        isChecked={course.isSelected}
        setIsChecked={(checked) => this.onChangeRow(course.id, checked)}
        key={course.id}
      />
    );

    return (
      <table className={css(styles.courseList)}>
        <thead>
          <CourseListRow textFirstCell='Available courses' isHeader={true}></CourseListRow>
          <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true}></CourseListRow>
        </thead>
        <tbody>
          {courseItems.size
            ? courseItems
            : <CourseListRow textFirstCell='No course available yet' />
          }
        </tbody>
      </table>
    );
  }
}

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid lightgray'
  }
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

const mapStateToProps = (state) => {
  return {
    listCourses: getCourses(state.courses)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
