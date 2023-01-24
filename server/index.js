import express from 'express';
import Sequelize from 'sequelize';
import sqlite3 from 'sqlite3';

const app = express();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
});

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});

sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.error('Error syncing database: ', error);
    });

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
