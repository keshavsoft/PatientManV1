import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnPatientCity = LocalRequestBody.PatientCity;
	let LocalCoumnPatientMobile = LocalRequestBody.PatientMobile;
	let LocalCoumnPatientName = LocalRequestBody.PatientName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnPatientName,LocalCoumnPatientMobile,LocalCoumnPatientCity});

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