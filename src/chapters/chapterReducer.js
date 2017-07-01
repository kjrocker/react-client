import * as types from './actionTypes';

const initialState = {
  chapters: {},
  stories: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.CHAPTERS_INDEX_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case types.STORY_GET_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state
  }
};

export default reducer;
