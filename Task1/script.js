document.addEventListener('DOMContentLoaded', () => {

    const addMessageForm = document.getElementById('add-message-form');
    if (!addMessageForm) throw "Could not fird 'add-message-form'"
    else addMessageForm.addEventListener('submit', addMessageFormSubmit);
});

function addMessageFormSubmit(e) {
    e.preventDefault();
    console.log('addMessageFormSubmit');

    validateAddMessageForm();
}

function validateAddMessageForm() {
    const messageBox = document.getElementById('massages-box');
    if (!messageBox) throw "messages-box was not found";

    const addMessageForm = document.getElementById('add-message-form');
    if (!addMessageForm) throw "Could not fird 'add-message-form'";

    const nameInput = addMessageForm.querySelector('[name="user-name"]');
    if (!nameInput) throw "name='user-name' not found - Validation stopped";

    const messageTextarea = addMessageForm.querySelector('[name="message-textarea"]');
    if (!messageTextarea) throw "name='message-textarea' not found - Validation stopped";

    const nameHelper = nameInput.parentNode.querySelector(".helper-text");
    if (!nameHelper) throw "name Helper-text is not found";

    const messageHelper = messageTextarea.parentNode.querySelector(".helper-text");
    if (!messageHelper) throw "message Helper-text is not found";

    if (nameInput.value == "") {
        nameInput.className = "invalid";
        nameHelper.setAttribute('data-error', "Name could not be empty");
    }
    else {
        nameInput.className = "valid";
        var newMassageBox = messageBox.innerHTML;

        let current = new Date();
        let cTime = current.getHours() + '.' + current.getMinutes() + '.' + current.getSeconds();
        let cDay = current.getDate() + '.' + (current.getMonth() + 1) + '.' + current.getFullYear();
        let dateTime = cTime + ' ' + cDay;


        newMassageBox += "<div class='col s12'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'><span>";
        newMassageBox += nameInput.value;
        newMassageBox += "</span><span class='badge right white-text'>";
        newMassageBox += dateTime;
        newMassageBox += "</span></span><p>";
        newMassageBox += messageTextarea.value;
        newMassageBox += "</p></div></div></div>";

        messageBox.innerHTML = newMassageBox;

        nameInput.value = null;
        messageTextarea.value = null;
    }







}