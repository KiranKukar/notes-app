class NotesView { // (by dynamically creating HTML elements).
  constructor(notesModel) {
    this.notesModel = notesModel; 
    this.mainContainerEl = document.querySelector('#main-container');
  }
  displayNotes() {
    const notes = this.notesModel.getNotes();
    notes.map(note => {
      const noteEl = document.createElement('div');
      //noteEl = document.createAttribute('note');
      noteEl.className = 'note';
      noteEl.innerText = note;
      this.mainContainerEl.append(noteEl);
    })
  }
}
module.exports = NotesView;