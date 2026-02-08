import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability,LocalCoumnDoctorCaption}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability,LocalCoumnDoctorCaption});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};