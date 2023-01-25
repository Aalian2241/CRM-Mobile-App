import models from '../models/index.js';
const { Lead } = models;


const getResults = async (req, res) => {
    try {
   
        const data = await Lead.findAll();
        console.log(JSON.stringify(data, null, 2));
        
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data from the database' });
    }
}
const createLead = async (req, res) => {
    try {
        const { LeadNo, CustomerName, DateCreated, Status } = req.body;
        const lead = await Lead.create({ LeadNo, CustomerName, DateCreated, Status });
        return res.status(201).json(lead);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export default { getResults };
