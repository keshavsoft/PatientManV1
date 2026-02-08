import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

var port = normalizePort(process.env.PORT || 3000);

import { router as routerFromMetaData } from "./MetaData/routes.js";

import { router as routerFromApi } from "./Api/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/MetaData", routerFromMetaData);

app.use("/Api", routerFromApi);
app.use("/V1", routerFromV1);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});