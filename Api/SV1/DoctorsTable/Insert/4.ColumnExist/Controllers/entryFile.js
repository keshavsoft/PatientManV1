import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnDoctorAvailability = LocalRequestBody.DoctorAvailability;
	let LocalCoumnDoctorDepartment = LocalRequestBody.DoctorDepartment;
	let LocalCoumnDoctorName = LocalRequestBody.DoctorName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnDoctorName,LocalCoumnDoctorDepartment,LocalCoumnDoctorAvailability});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};