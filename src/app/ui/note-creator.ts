import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
  `],
  template: `
    <div class="note-creator shadow-2">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.value"
          name="newnoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})

export class NoteCreator {
  @Output() createNote = new EventEmitter();
  newNote = {
    title: '',
    value: ''
  };
  fullForm: boolean = false;
  onCreateNote(){
    const { title,value } = this.newNote;
    if(title && value) {
      this.createNote.next({title,value})
      this.reset();
    }
  }

  reset(){
    this.newNote = {
      title: '',
      value: ''
    }
  }
  toggle(value: boolean){
    this.fullForm = value;
  }
}