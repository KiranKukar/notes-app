/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel = require('./notesModel');
 
 describe('Page view', () => {
  //  it('displays 2 paragraphs', () => {
  //    document.body.innerHTML = fs.readFileSync('./index.html'); // set document.body.innerHTML to have the same content of the "real" web page (because Jest "mocks" the HTML content internally).
 
  //    const view = new View();
 
  //    expect(document.querySelectorAll('p').length).toBe(2);
  //    //expect(document.getElementsByTagName('p').length).toBe(2); //same as above with different syntax
  //  });

  it('adds notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    notesModel.addNote('Make sure you finish your awesome github CV!');
    notesModel.addNote('No time to do anything else!');

    const notesView = new NotesView(notesModel);
    notesView.displayNotes();
    expect(document.getElementsByClassName('note').length).toBe(2)
    //expect(document.querySelectorAll('div.note')).toBe(2); 
  });
});