import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability});

    return LocalFromDal;
};

export {
    postDefaultFunc
};