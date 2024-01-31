const { User } = require('../models');

const userData = [
    {
        username: "Johnny Alpha",
        email: "jalpha@gmail.com",
        password: "p@ssw0rd1"
    },
    {
        username: "Sam Beta",
        email: "sbeta@gmail.com",
        password: "p@ssw0rd2"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;