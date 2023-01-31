import models from '../models/index.js';
const { Lead,Activity,Cargo,CargoInsurance,DangerousGoods, Shipment } = models;


const getLeads = async (req, res) => {
    try {
        const leads = await Lead.findAll();
        res.status(200).send(JSON.stringify(leads,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const getLeadIDByLeadNo = async (req, res) => {
    try {
        const { LeadNo } = req.body;

        // Find the Lead record with the matching LeadNo
        const lead = await Lead.findOne({ where: { LeadNo } });
        if (!lead) {
            return res.status(404).json({
                success: false,
                error: 'Lead not found'
            });
        }

        // Return the primary key of the Lead record (LeadID)
        res.status(200).json({
            success: true,
            data: lead.LeadID
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const getActivity = async (req, res) => {
    try {
        const activity = await Activity.findAll();
        res.status(200).send(JSON.stringify(activity,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getActivitiesByLeadID = async (req, res) => {
    try {
        const { LeadID } = req.params;
        const activities = await Activity.findAll({ where: { LeadID } });
        if (!activities) {
            return res.status(404).json({
                success: false,
                error: 'Activities not found'
            });
        }
        res.status(200).json({
            success: true,
            data: activities
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};


//-----------------------------------------------------------------------------------------
const getShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findAll();
        res.status(200).send(JSON.stringify(shipment,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getShipmentByLeadID = async (req, res) => {
    try {
        const { LeadID } = req.params;

        // Find the Shipment record with the matching LeadID
        const shipment = await Shipment.findOne({ where: { LeadID } });
        if (!shipment) {
            return res.status(404).json({
                success: false,
                error: 'Shipment not found'
            });
        }

        // Return the shipment record
        res.status(200).json({
            success: true,
            data: shipment
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------

const getCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findAll();
        res.status(200).send(JSON.stringify(cargo,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
const getCargoByLeadID = async (req, res) => {
    try {
        const { LeadID } = req.params;

        // Find the Cargo records with the matching LeadID
        const cargo = await Cargo.findAll({ where: { LeadID } });
        if (!cargo) {
            return res.status(404).json({
                success: false,
                error: 'Cargo not found'
            });
        }

        // Return all the Cargo records with the matching LeadID
        res.status(200).json({
            success: true,
            data: cargo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const getCargoInsurance = async (req, res) => {
    try {
        const cargoInsurance = await CargoInsurance.findAll();
        res.status(200).send(JSON.stringify(cargoInsurance,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
const getCargoInsuranceByCargoID = async (req, res) => {
    try {
        const { cargoID } = req.params;

        // Find the CargoInsurance record with the matching cargoID
        const cargoInsurance = await CargoInsurance.findOne({ where: { cargoID } });
        if (!cargoInsurance) {
            return res.status(404).json({
                success: false,
                error: 'CargoInsurance not found'
            });
        }

        // Return the CargoInsurance record
        res.status(200).json({
            success: true,
            data: cargoInsurance
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const getDangerousGoods = async (req, res) => {
    try {
        const dangerousGoods = await DangerousGoods.findAll();
        res.status(200).send(JSON.stringify(dangerousGoods,null,4));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
const getDangerousGoodsByCargoID = async (req, res) => {
    try {
        const { CargoID } = req.params;
        const dangerousGoods = await DangerousGoods.findAll({ where: { CargoID } });
        if (!dangerousGoods) {
            return res.status(404).json({
            success: false,
            error: 'Dangerous goods not found'
            });
        }
        res.status(200).json({
        success: true,
        data: dangerousGoods
    });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        error: 'Server Error'
        });
        }
    };
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


const createLead = async (req, res) => {
    try {
        console.log(req.body)
        const { LeadNo, CustomerName, DateCreated, Status } = req.body;
        const lead = await Lead.create({ LeadNo, CustomerName, DateCreated, Status });
        return res.status(201).json(lead);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const createShipment = async (req, res) => {
    try {
        const { ServiceType, LoadType, ScopeOfService, POD, PODZipcode, POL, POLZipcode, Remarks, LeadID } = req.body;

        // Use the primary key of the Lead record as the foreign key for Shipment
        const shipment = await Shipment.create({ ServiceType, LoadType, ScopeOfService, POD, PODZipcode, POL, POLZipcode, Remarks, LeadID });
        res.status(201).json({
            success: true,
            data: shipment
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const createActivity = async (req, res) => {
    try {
        const { ActivityID, ContactDate, ContactType, ContactStatus, ResponseStatus, NextFollowup, FollowupDate, LeadID} = req.body;
        
        // Use the primary key of the Lead record as the foreign key for Shipment
        const activity = await Activity.create({ ActivityID, ContactDate, ContactType, ContactStatus, ResponseStatus, NextFollowup, FollowupDate, LeadID });
        res.status(201).json({
            success: true,
            data: activity
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const createCargo = async (req, res) => {
    try {
        const {  LeadID} = req.body;

        // Use the primary key of the Lead record as the foreign key for Shipment
        const cargo = await Cargo.create({ LeadID });
        res.status(201).json({
            success: true,
            data: cargo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const createCargoInsurance = async (req, res) => {
    try {
        const { Amount, Currency, CargoID } = req.body;
        // Find the Lead record with LeadNo
        
        const cargoInsurance = await CargoInsurance.create({ Amount, Currency, CargoID });
        res.status(201).json({
            success: true,
            data: cargoInsurance
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

const createDangerousGoods = async (req, res) => {
    try {
        const { Class, IMGLink, MSDS, CargoID} = req.body;
        
        // Use the primary key of the Lead record as the foreign key for Shipment
        const dangerousGoods = await DangerousGoods.create({ Class, IMGLink, MSDS, CargoID });
        res.status(201).json({
            success: true,
            data: dangerousGoods
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


export default {
    getLeadIDByLeadNo, createLead, getLeads, createShipment, createActivity, 
    createCargo, 
    createCargoInsurance, 
    createDangerousGoods,
    getActivitiesByLeadID,
    getCargoByLeadID,getCargoInsuranceByCargoID,
    getLeadIDByLeadNo,getShipmentByLeadID,
    getShipment, getActivity, getDangerousGoods, getCargoInsurance, getCargo

};
