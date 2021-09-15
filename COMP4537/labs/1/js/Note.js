const template = document.querySelector('#template');
const parent = document.querySelector('#notes-div');

let id = 0;

class Note {
  constructor() {
    this.id = id++;

    this.note = template.cloneNode(true);
    this.note.setAttribute('id', this._id);

    this.note.getElementsByClassName('removeBtn')[0].value = this.id;

    this.content = '';
  }

  update = () =>  this.content = this.note.getElementsByClassName('content')[0].value;

  appendNote = () => parent.appendChild(this.note);

}
