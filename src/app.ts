require("dotenv").config();
import { AppDataSource } from "../config";
import bodyParser from "body-parser";
import routers from './routers';
import express from "express";

const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOWED_ORIGINS);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', routers);

// establish database connection
AppDataSource.initialize()
  .then(() => { console.log("DB connection established on port:", process.env.DB_PORT); })
  .catch((err: any) => { console.error("DB connection failed! error:", err); });

// start listening
app.listen(process.env.NODE_PORT, () => { console.log('Server listening ' + process.env.NODE_PORT); })
  .on('error', (e: any) => console.error(e));

export default app;