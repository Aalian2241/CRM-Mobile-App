import User from '../models/user';
import express from 'express';
const router = express.Router();
import {getLeads, getActivity, getShipment, getCargo} from "../controllers/CRM.js";

router.get('/users', exampleController.getUsers);
router.post('/users', exampleController.createUser);

export default router;


const router = express.Router();

router.get('/:leadId', getLeads);
router.get('/:leadId/:activityId', getActivity);
router.get('/:leadId/:shipmentId', getShipment);
router.get('/:lead/:cargoId', getCargo);


export default router;
