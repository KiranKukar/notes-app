class NotesApi {
  getRepoInfo(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
      .catch((error) => {
      console.error('Error:', error)
    });
  }

  createNote(note) {
    const noteAdd = { content: note };

    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteAdd),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

}

module.exports = NotesApi;