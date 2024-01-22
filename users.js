// Imports small array of users
// Pretend it's an API request
const users = require('./data..js');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id)
}

const getUsername = username => {
    return users.find (user => user.username === username);
}
const
// test
// console.log(getUser(3));

module.exports = {getUsers , getUser};