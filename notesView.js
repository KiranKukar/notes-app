class NotesView { // (by dynamically creating HTML elements).
  constructor(notesModel) {
    this.notesModel = notesModel; 
    this.mainContainerEl = document.querySelector('#main-container');


    document.querySelector('#add-note').addEventListener('click', () => {
      const newNote = document.querySelector('#new-note').value;
      this.addNote(newNote);
    });
  }
  
  displayNotes() {
    const notes = this.notesModel.getNotes();
    notes.map(note => {
      const noteEl = document.createElement('div');
      //noteEl = document.createAttribute('note');
      noteEl.className = 'note';
      noteEl.innerText = note;
      this.mainContainerEl.append(noteEl);
    });
  }


    addNote(newNote) {
      this.notesModel.addNote(newNote);
      this.displayNotes();
    };
}
module.exports = NotesView;