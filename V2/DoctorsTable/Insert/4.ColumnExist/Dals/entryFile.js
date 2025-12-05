import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};