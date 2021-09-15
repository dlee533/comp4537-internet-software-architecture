let noteArr = [];
const intervalTime = 2000;

function deleteNote() {
  event.target.parentElement.remove();
  noteArr = noteArr.filter(note => note.id!=event.target.value);
}

function addNote() {
  const note = new Note();
  noteArr.push(note);
  note.appendNote();
}

function update() {
  for (let i in noteArr) noteArr[i].update();
  localStorage.setItem('notes', JSON.stringify(noteArr));
}



setInterval(update, intervalTime);
