import { Component } from '@angular/core';
import { NoteCard,NoteCreator } from '../ui';

@Component({
  selector: 'notes-container',
  directives: [ NoteCard,
   NoteCreator ],
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],  
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
        <note-card 
          class="col-md-4 col-xs-2"
          [note]="note"
          *ngFor="let note of notes; let i = index"
          (checked)="onNoteChecked($event, i)"
        >
        </note-card>
        </div>
      </div>
    </div>
  `
})

export class Notes {
  notes = [
  {title: 'new note', value: 'note here', color: 'seagreen'},
  {title: 'new note', value: 'note here', color: 'lightblue'},
  {title: 'new note', value: 'note here', color: 'lightcoral'}
  ]

  onNoteChecked(note, i){
    this.notes.splice(i, 1);
  }

  onCreateNote(note){
    this.notes.push(note)
  }
};