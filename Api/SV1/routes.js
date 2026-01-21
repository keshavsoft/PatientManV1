import express from 'express';

const router = express.Router();

import { router as routerFromDoctorsTable } from "./DoctorsTable/routes.js";
import { router as routerFromPatientsTable } from "./PatientsTable/routes.js";

router.use("/DoctorsTable", routerFromDoctorsTable);
router.use("/PatientsTable", routerFromPatientsTable);

export { router };