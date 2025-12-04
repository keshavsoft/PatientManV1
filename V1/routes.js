import express from 'express';

const router = express.Router();

import { router as routerFromPatientsTable } from "./PatientsTable/routes.js";

router.use("/PatientsTable", routerFromPatientsTable);

export { router };