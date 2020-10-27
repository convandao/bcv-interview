import ActionTypes from '../constants/actionTypes';

const initialState = {
    posts: [],
    users: [],
    properties: [],
    loading: false,
    error: false
};

export default function interview(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case ActionTypes.GET_POSTS.REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_POSTS.SUCCESS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case ActionTypes.GET_POSTS.FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ActionTypes.GET_USERS.REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_USERS.SUCCESS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case ActionTypes.GET_USERS.FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ActionTypes.GET_PROPERTIES.REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_PROPERTIES.SUCCESS:
            return {
                ...state,
                properties: payload,
                loading: false
            }
        case ActionTypes.GET_PROPERTIES.FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }

}