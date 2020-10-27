import InterviewApi from '../api/InterviewApi';
import ActionTypes from '../constants/actionTypes';

export function getPosts() {
    return dispatch => {
        dispatch(request());
        return InterviewApi
            .getPosts()
            .then((response) => response.json())
            .then(resp => {
                return dispatch(success(resp))
            })
            .catch(error => dispatch(failure(error)));
    };

    function request() { return { type: ActionTypes.GET_POSTS.REQUEST } }
    function success(activities) { return { type: ActionTypes.GET_POSTS.SUCCESS, payload: activities } }
    function failure(error) { return { type: ActionTypes.GET_POSTS.FAILURE, payload: error } }
}

export function getUsers() {
    return dispatch => {
        dispatch(request());
        return InterviewApi
            .getUsers()
            .then((response) => response.json())
            .then(resp => {
                return dispatch(success(resp))
            })
            .catch(error => dispatch(failure(error)));
    };

    function request() { return { type: ActionTypes.GET_USERS.REQUEST } }
    function success(activities) { return { type: ActionTypes.GET_USERS.SUCCESS, payload: activities } }
    function failure(error) { return { type: ActionTypes.GET_USERS.FAILURE, payload: error } }
}

export function getProperties() {
    return dispatch => {
        dispatch(request());
        return InterviewApi
            .getProperties()
            .then((response) => response.json())
            .then(resp => {
                return dispatch(success(resp))
            })
            .catch(error => dispatch(failure(error)));
    };

    function request() { return { type: ActionTypes.GET_PROPERTIES.REQUEST } }
    function success(activities) { return { type: ActionTypes.GET_PROPERTIES.SUCCESS, payload: activities } }
    function failure(error) { return { type: ActionTypes.GET_PROPERTIES.FAILURE, payload: error } }
}
