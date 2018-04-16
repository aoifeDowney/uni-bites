const mongoose = require('mongoose');
const User = require('../models/user.js');

const users = [
    {
        email: "admin",
        password: User.generateHash("admin")
    },
    {
        email: "cafe",
        password: User.generateHash("cafe")
    },
    {
        email: "test",
        password: User.generateHash("test")
    }
]

function add_users() {

    return User.deleteMany({}).then(
        (res) => {
            console.log('\n[Users]');
            console.log('Removed existing users, %s', res);
            return User.insertMany(users, (err, docs) => {
                for(let i = 0; i < docs.length; i++) {
                    console.log(`    * ${docs[i].email}`);
                }
                console.log();
            })
        }
    );
}

module.exports = add_users;
