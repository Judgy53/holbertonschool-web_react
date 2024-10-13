import { Map, setIn } from 'immutable';
import * as ActionTypes from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

export const initialState = new Map({
  courses: Map()
});

export default function courseReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_COURSE_SUCCESS:
      const data = action.courses.map(course => ({
        ...course,
        isSelected: false
      }));
      const normalized = {
        courses: Map(coursesNormalizer(data)['entities']['courses'])
      }
      return state.mergeDeep(normalized);
    case ActionTypes.SELECT_COURSE:
      return setIn(state, ['courses', String(action.index), 'isSelected'], true);
    case ActionTypes.UNSELECT_COURSE:
      return setIn(state, ['courses', String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}
