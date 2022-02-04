class NotesModel {
  constructor() {
    this.notes = [] 
  }

  addNote(note) {
    this.notes.push(note);
  }

  getNotes() {
    return this.notes
  }

  reset() {
    this.notes = []
  }

  setNotes(notes) {
    notes.forEach(note => {
      this.notes.push(note);
    });

  }

}

module.exports = NotesModel;