import { bindActionCreators } from 'redux';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const fetch = require('node-fetch');

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

export function boundSelectCourse(dispatch) {
  return bindActionCreators(selectCourse, dispatch);
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

export function boundUnSelectCourse(dispatch) {
  return bindActionCreators(unSelectCourse, dispatch);
}

export function setCourses(courses) {
  return {
    type: FETCH_COURSE_SUCCESS,
    courses
  }
}

export function fetchCourses() {
  return async (dispatch) => {
    return fetch('/courses.json')
      .then((response) => response.json())
      .then((json) => dispatch(setCourses(json)));
  }
}
