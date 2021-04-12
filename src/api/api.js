const fetch = require("node-fetch");
const loginApi = (tokenId) => {
    //console.log('token id is', tokenId);
    const data = {'token_id': tokenId};
    //console.log('data is', data)
    return fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
};

const logoutApi = (tokenId) => {
    const data = {'token_id': tokenId};
    return fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
};

const userApi = (tokenId) => {
    return fetch('/api/user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenId,
            'Content-Type': 'application/json',
        }
    }).then(response => response.json());
};

export {
    loginApi,
    logoutApi,
    userApi
}