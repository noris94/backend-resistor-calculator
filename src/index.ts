import express from 'express';
import { calculateOhms, getBandColors } from './controllers/handlers';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/calculate-ohms', calculateOhms);
app.get('/get-band-colors', getBandColors);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

