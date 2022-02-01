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
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModel) {
          this.notesModel = notesModel;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note").addEventListener("click", () => {
            const newNote = document.querySelector("#new-note").value;
            this.addNote(newNote);
          });
        }
        displayNotes() {
          const notes2 = this.notesModel.getNotes();
          notes2.map((note) => {
            const noteEl = document.createElement("div");
            noteEl.className = "note";
            noteEl.innerText = note;
            this.mainContainerEl.append(noteEl);
          });
        }
        addNote(newNote) {
          this.notesModel.addNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notes = new NotesModel();
  var view = new NotesView(notes);
  view.displayNotes();
  console.log("The notes are noting");
  console.log(notes.getNotes());
})();
