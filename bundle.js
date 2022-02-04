(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        addNote(note) {
          this.notes.push(note);
        }
        getNotes() {
          return this.notes;
        }
        reset() {
          this.notes = [];
        }
        setNotes(notes) {
          notes.forEach((note) => {
            this.notes.push(note);
          });
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModel, notesApi) {
          this.notesModel = notesModel;
          this.notesApi = notesApi;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note").addEventListener("click", () => {
            const newNote = document.querySelector("#new-note").value;
            this.addNote(newNote);
            document.querySelector("#new-note").value = "";
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.notesModel.getNotes();
          notes.map((note) => {
            const noteEl = document.createElement("div");
            noteEl.className = "note";
            noteEl.innerText = note;
            this.mainContainerEl.append(noteEl);
          });
        }
        addNote(newNote) {
          this.notesModel.addNote(newNote);
          this.notesApi.createNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        getRepoInfo(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
        createNote(note) {
          const noteAdd = { content: note };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(noteAdd)
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.getRepoInfo((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
