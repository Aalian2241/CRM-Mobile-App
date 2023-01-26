import express from 'express';
import controller from '../controller/index.js';

const router = express.Router();

// GETTER ROUTES
router.get('/leads/:LeadNo/LeadID', controller.getLeadIDByLeadNo); //http://localhost:3000/leads/12345/LeadID
router.get('/leads', controller.getLeads);
router.get('/activity', controller.getActivity);
router.get('/shipment', controller.getShipment);
router.get('/cargo', controller.getCargo);
router.get('/cargoInsurance', controller.getCargoInsurance);
router.get('/dangerousGoods', controller.getDangerousGoods);

// SETTER ROUTES
router.post('/leads', controller.createLead);
router.post('/shipment', controller.createShipment);
router.post('/activity', controller.createActivity);
router.post('/cargo', controller.createCargo);
router.post('/cargoInsurance', controller.createCargoInsurance);
router.post('/dangerousGoods', controller.createDangerousGoods);

export default router;
