import BaseApi from './BaseApi';

class InterviewApi extends BaseApi {
    getPosts() {
        return fetch(this.REACT_APP_SERVER_URL + "/api/posts");
    }

    getUsers() {
        return fetch(this.REACT_APP_SERVER_URL + "/api/users");
    }

    getProperties() {
        return fetch(this.REACT_APP_SERVER_URL + "/api/properties");
    }
}

export default new InterviewApi();