import express from 'express';

const router = express.Router();

import { router as routerFromDoctorsTable } from "./DoctorsTable/routes.js";

router.use("/DoctorsTable", routerFromDoctorsTable);

export { router };