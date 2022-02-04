class NotesView { // (by dynamically creating HTML elements).
  constructor(notesModel, notesApi) {
    this.notesModel = notesModel; 
    this.notesApi = notesApi;
    this.mainContainerEl = document.querySelector('#main-container');


    document.querySelector('#add-note').addEventListener('click', () => {
      const newNote = document.querySelector('#new-note').value;
      this.addNote(newNote);
      document.querySelector('#new-note').value = '';
    });
  }
  
  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
    const notes = this.notesModel.getNotes();
    notes.map(note => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.innerText = note;
      this.mainContainerEl.append(noteEl);
    });
  }


    addNote(newNote) {
      this.notesModel.addNote(newNote);
      this.notesApi.createNote(newNote);
      this.displayNotes();
    };
}
module.exports = NotesView;