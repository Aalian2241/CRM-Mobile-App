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

export default { getResults };
