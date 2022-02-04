/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');
 
 describe('Page view', () => {

  it('adds notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    notesModel.addNote('Make sure you finish your awesome github CV!');
    notesModel.addNote('No time to do anything else!');

    const notesView = new NotesView(notesModel);
    notesView.displayNotes();
    expect(document.getElementsByClassName('note').length).toBe(2)
  });

   it('users adds note on browser and it is displayed', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const notesModel = new NotesModel();
     const api = new NotesApi();
     
     const notesView = new NotesView(notesModel, api);

     const inputEL = document.querySelector('#new-note');
     inputEL.value = 'notey note'
     const buttonEL = document.querySelector('#add-note');
     buttonEL.click();

     notesView.displayNotes()

     const array = document.querySelectorAll('div.note')
     console.log(array.length);
     expect((array[array.length - 1]).innerText).toEqual('notey note');
     
   });

   it('users adds 2 notes on browser and only they are displayed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEL = document.querySelector('#new-note');
    inputEL.value = 'notey note'
    const buttonEL = document.querySelector('#add-note');
    buttonEL.click();
     
    inputEL.value = 'notey notey note'
    buttonEL.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('notey note');
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('notey notey note');
  });

   
});