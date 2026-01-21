import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = () => {
    KeysJson.body = StartFuncPrepareBody();

    return KeysJson;
};

export { StartFunc };