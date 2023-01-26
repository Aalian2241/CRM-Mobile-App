import models from '../models/index.js';
const { Lead,Activity,Cargo,CargoInsurance,DangerousGoods } = models;


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


const createLead = async (req, res) => {
    try {
        const { LeadNo, CustomerName, DateCreated, Status } = req.body;
        const lead = await Lead.create({ LeadNo, CustomerName, DateCreated, Status });
        return res.status(201).json(lead);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

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

//--------------------------------
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
//--------------------------------

//----------------------------------
export default { getLeads };
