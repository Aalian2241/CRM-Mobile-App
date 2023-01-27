import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/db.sqlite',
    logging: true
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({force: true})
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('An error occurred: ', err);
  });

export default sequelize;
