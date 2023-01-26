import express from 'express';
import controller from '../controller/index.js';

const router = express.Router();

router.get('/leads', controller.getLeads);
router.post('/leads', controller.createLead);
router.get('/leads/:LeadNo/LeadID', controller.getLeadIDByLeadNo); //http://localhost:3000/leads/12345/LeadID
router.post('/shipment', controller.createShipment);
router.post('/activity', controller.createActivity);
router.post('/cargo', controller.createCargo);
router.post('/cargoInsurance', controller.createCargoInsurance);
router.post('/dangerousGoods', controller.createDangerousGoods);

export default router;
