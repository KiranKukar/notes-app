
const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify());
  
    api.getRepoInfo((repoInfo) => {
      expect(repoInfo).toBe(["This note is coming from the server"]);
    });
  });

  jest.mock('./notesApi');

  it('posts a note to the server', async () => {
    const api = new NotesApi();
    api.createNote('This is another note')

    fetch.mockResponseOnce(JSON.stringify());
    
    api.getRepoInfo((repoInfo) => {
      expect(repoInfo).toBe(["This note is coming from the server", "This is another note"]);
    });
  });


});