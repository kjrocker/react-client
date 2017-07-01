import normalize from 'json-api-normalizer'

import * as types from './actionTypes'
import { genericAJAX } from '../helpers'

const getRequest = {
  method: 'get',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: {}
}

export const getStoryWithChapters = (storyId) => {
  return (dispatch) => {
    dispatch(getStory(storyId))
    dispatch(getChapters(storyId))
  }
}

export const getChapters = (storyId) => {
  return genericAJAX(`/stories/${storyId}/chapters`, getRequest, {
    request: chapterIndexRequest,
    success: chapterIndexSuccess,
    failure: chapterIndexFailure
  })
}

export const getStory = (storyId) => {
  return genericAJAX(`/stories/${storyId}`, getRequest, {
    request: storyGetRequest,
    success: storyGetSuccess,
    failure: storyGetFailure
  })
}

const chapterIndexRequest = () => {
  return {
    type: types.CHAPTERS_INDEX_REQUEST
  }
}

const chapterIndexSuccess = (response) => {
  return {
    type: types.CHAPTERS_INDEX_SUCCESS,
    payload: normalize(response)
  }
}

const chapterIndexFailure = (error) => {
  return {
    type: types.CHAPTERS_INDEX_FAILURE,
    payload: { error }
  }
}

const storyGetRequest = () => {
  return {
    type: types.STORY_GET_REQUEST
  }
}

const storyGetSuccess = (response) => {
  return {
    type: types.STORY_GET_SUCCESS,
    payload: normalize(response)
  }
}

const storyGetFailure = (error) => {
  return {
    type: types.STORY_GET_FAILURE,
    payload: { error }
  }
}
