import express from 'express';
import controller from '../controllers/CRM.js';

const router = express.Router();
import jwt from 'jsonwebtoken';

const secretKey = 'secret_key'; // this should be stored in a secure environment variable, not in the codebase

const authenticate = (req, res, next) => {
  
  const authHeader = req.headers.authorization;
  // if (!authHeader) return res.status(401).send('Authorization header missing');
  // console.log(authHeader)
  // const bearerToken = authHeader.split(' ')[1];
  // if (!bearerToken) return res.status(401).send('Bearer token missing');

  try {
    const decoded = jwt.verify(authHeader, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send('Invalid token');
  }
};


// GETTER ROUTES

router.get('/leads/:LeadNo/LeadID', authenticate, controller.getLeadIDByLeadNo); //http://localhost:3000/leads/12345/LeadID
router.get('/leads',authenticate, controller.getLeads);

router.get('/activity', authenticate, controller.getActivity);
router.get('/activity/:LeadID', authenticate, controller.getActivitiesByLeadID);

router.get('/shipment', authenticate, controller.getShipment);
router.get('/shipment/:LeadID', authenticate, controller.getShipmentByLeadID);

router.get('/cargo', authenticate, controller.getCargo);
router.get('/cargo/:LeadID', authenticate, controller.getCargoByLeadID);


router.get('/cargoInsurance', authenticate, controller.getCargoInsurance);
router.get('/cargoInsurance/:cargoID', authenticate, controller.getCargoInsuranceByCargoID);

router.get('/dangerousGoods', authenticate, controller.getDangerousGoods);
router.get('/cargo/:LeadID/cargo', authenticate, controller.getCargoByLeadID);
 

// SETTER ROUTES
router.post('/leads', authenticate, controller.createLead);
router.post('/shipment', authenticate, controller.createShipment);
router.post('/activity', authenticate, controller.createActivity);
router.post('/cargo', authenticate, controller.createCargo);
router.post('/cargoInsurance', authenticate, controller.createCargoInsurance);
router.post('/dangerousGoods', authenticate, controller.createDangerousGoods);


router.post('/authenticate', (req, res) => {
  console.log(req.body)
  // Verify the user's credentials
  if (!req.body) {
    return res.status(400).json({ error: 'Bad request' });
}
  const username = req.body.username;     
  
  // If the user's credentials are correct, sign a JSON Web Token
  const token = jwt.sign({ sub: username}, secretKey, { expiresIn: '1h' });

  // Return the JSON Web Token to the user
  res.json({ token });
});



export default router;
