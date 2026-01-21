const StartFunc = () => {
    let jVarLocalPostObject = jFLocalPreparePostBody();

    return jVarLocalPostObject
};

const jFLocalPreparePostBody = () => {
    const form = document.getElementById("FormId");

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries())
    for (let keyValue of formData.entries()) {
        console.log(keyValue);
    }

    return formObject;
};

export { StartFunc }