import express from 'express';
import routes from './routes/index.js';

const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(routes);
app.listen(8080, () => {
    console.log('Server running on port 3000');
});

