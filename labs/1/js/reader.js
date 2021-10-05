let retrievedNotes = [];
const intervalTime = 2000;
const storageKey = "notes"
const msgUpdate = "Updated at: ";

function createPageDivs() {
    let updateMessageDiv = document.createElement("div");
    updateMessageDiv.setAttribute("id", "updateMessage");
    document.body.appendChild(updateMessageDiv);

    let notesDiv = document.createElement("div");
    notesDiv.setAttribute("id", "notes");
    document.body.appendChild(notesDiv);
}

function ReaderNote(message) {
    this.textArea = document.createElement("textarea");
    this.textArea.value = message;
    this.textArea.setAttribute("readonly", true);
    document.getElementById("notes").appendChild(this.textArea);
}

function displayNotes(notes) {
    document.getElementById("notes").innerHTML = "";
    for (i in notes) new ReaderNote(notes[i].content);
}

function adjustTextArea() {
    let textAreas = document.querySelectorAll("textarea");
    for (let i = 0; i < textAreas.length; i++) {
        textAreas[i].style.height = textAreas[i].scrollHeight + "px";
    }
}

function updateRetrievalTime(timestamp) {
    document.getElementById("updateMessage").innerHTML = msgUpdate + timestamp;
}

function retrieveNotes() {
    retrievedNotes = JSON.parse(localStorage.getItem(storageKey));
    displayNotes(retrievedNotes);
    adjustTextArea();
    updateRetrievalTime(new Date().toLocaleTimeString());
}

function initializeReader() {
    createPageDivs();
    retrieveNotes();
    setInterval(retrieveNotes, intervalTime);
}

initializeReader();
