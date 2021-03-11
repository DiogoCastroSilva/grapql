const axios = require('axios');


const CompanyService = {
    getById(id) {
        return axios.get(`http://localhost:3000/companies/${id}`);
    },
    getUsers(id) {
        return axios.get(`http://localhost:3000/companies/${id}/users`);
    }
};

module.exports = CompanyService;