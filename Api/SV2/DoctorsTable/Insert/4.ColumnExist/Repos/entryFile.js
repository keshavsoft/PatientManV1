import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability,LocalCoumnDoctorCaption}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability,LocalCoumnDoctorCaption});

    return LocalFromDal;
};

export {
    postDefaultFunc
};