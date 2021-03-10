const { axios } = require("axios");


const UserService = {
    getById(id) {
        return axios.get(`http://localhost:3000/users/${id}`);
    }
};

module.exports = UserService;