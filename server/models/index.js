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
    DateCreated:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    CustomerName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    Status: {
        type: Sequelize.TEXT,
    },
    
},{
    tableName:"Lead",
    timestamps:true
});
//-----------------------------------------------------------
const Activity = sequelize.define('Activity', {
    ActivityID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LeadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Lead',
            key: 'LeadID'
        }
    },
    ContactDate: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    ContactType: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ContactStatus: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ResponseStatus: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    NextFollowup: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    FollowupDate: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
}, {
    tableName:"Activity",
    timestamps: true
});
Lead.hasMany(Activity, { foreignKey: 'LeadID' });
Activity.belongsTo(Lead, { foreignKey: 'LeadID' });

//-----------------------------------------------------------
const Cargo = sequelize.define('Cargo', {
    CargoID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LeadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Lead',
            key: 'LeadID'
        }
    },
}, {
    tableName:"Cargo",
    timestamps: true
});
Lead.hasMany(Activity, { foreignKey: 'LeadID' });
Cargo.belongsTo(Cargo, { foreignKey: 'LeadID' });

//-----------------------------------------------------------

const CargoInsurance = sequelize.define('CargoInsurance', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Currency: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    CargoID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Cargo',
            key: 'CargoID'
        }
    }
}, {
    tableName:"CargoInsurance",
    timestamps: false
});
Cargo.hasMany(CargoInsurance, { foreignKey: 'CargoID' });
CargoInsurance.belongsTo(Cargo, { foreignKey: 'CargoID' });
//-------------------------------------------------------------

const DangerousGoods = sequelize.define('DangerousGoods', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Class: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    IMGLink: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    MSDS: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    CargoID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Cargo',
            key: 'CargoID'
        }
    }
}, {
    tableName:"DangerousGoods",
    timestamps: false
});

Cargo.hasMany(DangerousGoods, { foreignKey: 'CargoID' });
DangerousGoods.belongsTo(Cargo, { foreignKey: 'CargoID' });
//-----------------------------------------------------------
const Shipment = sequelize.define('Shipment', {
    ShipmentID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LeadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Lead',
            key: 'LeadID'
        }
    },
    ServiceType: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    LoadType: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ScopeOfService: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    POD: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    PODZipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    POL: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    POLZipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Renarks: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    tableName:"Shipment",
    timestamps: false
});

Lead.hasMany(Shipment, { foreignKey: 'LeadID' });
Shipment.belongsTo(Lead, { foreignKey: 'LeadID' });
//-----------------------------------------------------------

export default { Lead, Activity, Shipment, DangerousGoods,CargoInsurance, Cargo };
