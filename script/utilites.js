//store player name by list on click button
function getElementAndSetName(elementId, btnId) {
    const getElement = document.getElementById(elementId);
    const elementValue = getElement.innerText;
    //create list under 'ol'
    const list = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = elementValue;
    if (list.childNodes.length <= 5) {
        list.appendChild(li);
        // making btn disabled
        const getButtonId = document.getElementById(btnId);
        getButtonId.disabled = 'true';
    }
    else {
        alert('You are already added 5 players.....')
    }
}
//find html element by id
function getElementById(elementID) {
    const getElement = document.getElementById(elementID);
    if (getElement.tagName == "INPUT") {
        const getElementString = getElement.value
        const elementValue = parseFloat(getElementString);
        return elementValue;
    }
    else {
        const getElementString = getElement.innerText
        const elementValue = parseFloat(getElementString);
        return elementValue;
    }
}

//set value in another element by using id

function setValueById(element, value) {
    const getElement = document.getElementById(element);
    getElement.innerText = value;
    return getElement;
}