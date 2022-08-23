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
}