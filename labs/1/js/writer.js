const stored_time_span = document.getElementById("stored_time");
const parent = document.querySelector('#notes-div');
const intervalTime = 2000;

let noteArr = [];

function deleteNote() {
  // remove the element in DOM
  event.target.parentElement.remove();
  // remove the note object from arr
  noteArr = noteArr.filter(note => note.id!=event.target.value);
}

function addNote() {
  //create note element in DOM + append to noteArr
  const note = new Note();
  noteArr.push(note);
  parent.appendChild(note.note);
}

function update() {
  // for each note stored in arr, check if any updates.
  for (let i in noteArr) noteArr[i].update();
  //update localstorage
  localStorage.setItem('notes', JSON.stringify(noteArr));
  updateTime();
}

function updateTime() {
  // update html & localstorage
  const stored_at = new Date().toLocaleTimeString();
  // localStorage.setItem('stored_at', stored_at)
  stored_time_span.innerHTML = stored_at;
}

// repeat the update every 2 seconds
setInterval(update, intervalTime);
