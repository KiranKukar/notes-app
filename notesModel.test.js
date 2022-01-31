const NotesModel = require("./notesModel")

describe('NotesModel', () => {
  const model = new NotesModel;
  it('starts with an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  });

  it('adds new notes to list', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual([ 'Buy milk', 'Go to the gym' ]);
  });

  it('reset should reset the notes array to empty', () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });

});