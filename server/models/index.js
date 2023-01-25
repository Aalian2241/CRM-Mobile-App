import sequelize from '../config/db.js';
import Sequelize from 'sequelize';

const Lead = sequelize.define('Lead', {
    LeadID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LeadNo: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    CustomerName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DateCreated: {
        type: Sequelize.REAL,
    },
    Status: {
        type: Sequelize.TEXT,
    },
    
},{
    tableName:"Lead"
});


export default { Lead };
