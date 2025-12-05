import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnPatientName,LocalCoumnPatientMobile,LocalCoumnPatientCity}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnPatientName,LocalCoumnPatientMobile,LocalCoumnPatientCity});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};