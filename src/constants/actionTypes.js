import { defineAction } from 'redux-define';

export default {
    GET_POSTS: defineAction('GET_POSTS', ['REQUEST', 'SUCCESS', 'FAILURE']),
    GET_USERS: defineAction('GET_USERS', ['REQUEST', 'SUCCESS', 'FAILURE']),
    GET_PROPERTIES: defineAction('GET_PROPERTIES', ['REQUEST', 'SUCCESS', 'FAILURE']),
}