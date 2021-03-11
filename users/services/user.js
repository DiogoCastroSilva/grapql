const axios = require("axios");


const userURL = 'http://localhost:3000/users';

const UserService = {
    getById(id) {
        return axios.get(`${userURL}/${id}`);
    },
    add(firstName, age) {
        return axios.post(userURL, {
            firstName,
            age
        });
    },
    delete(id) {
        return axios.delete(`${userURL}/${id}`)
    },
    update(id, args) {
        return axios.patch(`${userURL}/${id}`, args);
    }
};

module.exports = UserService;