import { StartFunc as StartFuncFromSaveButtonId } from './SaveButtonId/EntryFile.js';
import { StartFunc as StartFuncFromModalLoginButtonId } from './ModalLoginButtonId/EntryFile.js';

const StartFunc = () => {
	StartFuncFromSaveButtonId();
	StartFuncFromModalLoginButtonId();
};

export { StartFunc };