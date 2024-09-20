import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import courseReducer, { initialState } from './courseReducer';

describe('uiReducer()', () => {
  it('returns the default state when no action is passed', () => {
    expect(courseReducer()).toEqual(initialState);
  });

  it('returns the action data when action `FETCH_COURSE_SUCCESS` is passed', () => {
    const fetch_data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const expected = fetch_data.map(course => ({ ...course, isSelected: false }));
    expect(courseReducer(initialState, { type: FETCH_COURSE_SUCCESS, data: fetch_data })).toEqual(expected);
  });

  it('returns the correct data when action `SELECT_COURSE` is passed', () => {
    const state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const expected = state.map(course => course.id === 2 ? { ...course, isSelected: true } : course);
    expect(courseReducer(state, { type: SELECT_COURSE, index: 2 })).toEqual(expected);
  });

  it('returns the correct data when action `UNSELECT_COURSE` is passed', () => {
    const state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: true },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: true }
    ];
    const expected = state.map(course => course.id === 2 ? { ...course, isSelected: false } : course);
    expect(courseReducer(state, { type: UNSELECT_COURSE, index: 2 })).toEqual(expected);
  });
});
