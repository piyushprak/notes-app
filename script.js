let addBtn = document.getElementById("addBtn");
let noteText = document.getElementById("noteText");
let notesContainer = document.getElementById("notesContainer");

function createNote(text) {
  let note = document.createElement("div");
  note.classList.add("note");

  let p = document.createElement("p");
  p.innerText = text;

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = "🗑";

  deleteBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  note.appendChild(p);
  note.appendChild(deleteBtn);

  notesContainer.appendChild(note);
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note p").forEach(note => {
    notes.push(note.innerText);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(text => createNote(text));
}

addBtn.addEventListener("click", () => {
  if (noteText.value.trim() !== "") {
    createNote(noteText.value);
    noteText.value = "";
    saveNotes();
  }
});

window.addEventListener("DOMContentLoaded", loadNotes);