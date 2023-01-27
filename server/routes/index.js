import express from 'express';
import controller from '../controllers/CRM.js';

const router = express.Router();

// GETTER ROUTES
router.get('/leads/:LeadNo/LeadID', controller.getLeadIDByLeadNo); //http://localhost:3000/leads/12345/LeadID
router.get('/leads', controller.getLeads);

router.get('/activity', controller.getActivity);
router.get('/activity/:LeadID', controller.getActivitiesByLeadID);

router.get('/shipment', controller.getShipment);
router.get('/shipment/:LeadID', controller.getShipmentByLeadID);

router.get('/cargo', controller.getCargo);
router.get('/cargo/:LeadID', controller.getCargoByLeadID);


router.get('/cargoInsurance', controller.getCargoInsurance);
router.get('/cargoInsurance/:cargoID', controller.getCargoInsuranceByCargoID);

router.get('/dangerousGoods', controller.getDangerousGoods);
router.get('/cargo/:LeadID/cargo', controller.getCargoByLeadID);
 

// SETTER ROUTES
router.post('/leads', controller.createLead);
router.post('/shipment', controller.createShipment);
router.post('/activity', controller.createActivity);
router.post('/cargo', controller.createCargo);
router.post('/cargoInsurance', controller.createCargoInsurance);
router.post('/dangerousGoods', controller.createDangerousGoods);

export default router;
