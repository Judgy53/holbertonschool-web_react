import { thunk } from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';

describe('selectCourse()', () => {
  it('returns the correct action when passed 1', () => {
    const expectedResult = { type: SELECT_COURSE, index: 1 };

    expect(selectCourse(1)).toEqual(expectedResult);
  });
});

describe('unSelectCourse()', () => {
  it('returns the correct action when passed 1', () => {
    const expectedResult = { type: UNSELECT_COURSE, index: 1 };

    expect(unSelectCourse(1)).toEqual(expectedResult);
  });
});

describe('fetchCourses()', () => {
  let middlewares, mockStore;
  beforeEach(() => {
    middlewares = [thunk];
    mockStore = configureStore(middlewares);
  });

  afterEach(() => {
    fetchMock.resetMocks();
  })

  it('returns the correct response when it succeeds', () => {
    const fetch_data = [
      {
        "id": "1",
        "name": "ES6",
        "credit": 60
      },
      {
        "id": "2",
        "name": "Webpack",
        "credit": 20
      },
      {
        "id": "3",
        "name": "React",
        "credit": 40
      }
    ];
    fetch.mockResponseOnce(JSON.stringify(fetch_data));

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, courses: fetch_data }
    ];

    const store = mockStore({});
    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
