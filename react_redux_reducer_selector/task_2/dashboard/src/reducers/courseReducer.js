import * as ActionTypes from '../actions/courseActionTypes';

export const initialState = [];

export default function courseReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({
        ...course,
        isSelected: false
      }));
    case ActionTypes.SELECT_COURSE:
      return state.map(course => course.id === action.index ? {
        ...course,
        isSelected: true
      } : course);
    case ActionTypes.UNSELECT_COURSE:
      return state.map(course => course.id === action.index ? {
        ...course,
        isSelected: false
      } : course);
    default:
      return state;
  }
}
