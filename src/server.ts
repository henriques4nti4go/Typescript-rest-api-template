import * as express from 'express';
import routes from './routes';
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(routes);

app.listen(process.env.SERVER_PORT);