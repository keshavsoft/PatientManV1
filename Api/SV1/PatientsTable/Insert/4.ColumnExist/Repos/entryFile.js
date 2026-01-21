import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnPatientName,LocalCoumnPatientMobile,LocalCoumnPatientCity}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnPatientName,LocalCoumnPatientMobile,LocalCoumnPatientCity});

    return LocalFromDal;
};

export {
    postDefaultFunc
};