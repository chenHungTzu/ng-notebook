import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NotePayload } from '../model/note-payload';

@Component({
  selector: 'ng-notebook',
  templateUrl: './ng-notebook.component.html',
  styleUrls: ['./ng-notebook.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class NgNotebookComponent implements OnInit {


public notePayload  : NotePayload = new NotePayload();
private _displaycontent = true;
private _notecollection = [];

@Output() onnotechange = new EventEmitter<NotePayload>();

@Input('name') name : string = "";

@Input('displaycontent') 
get displaycontent(): boolean {
  console.log(`[get] ${this._displaycontent}`)
  return this._displaycontent;
}
set displaycontent(value: boolean) {
  
  this._displaycontent = "" + value === "true";
  console.log(`[set] ${this._displaycontent}`)
}

@Input('notecollection') 
get notecollection(): Array<NotePayload> {
  console.log(`[get] ${this._notecollection}`)
  return this._notecollection;
}
set notecollection(value: Array<NotePayload>) {
  
  console.log(value)
  try {
    this._notecollection = JSON.parse(`${value.toString()}`);
  } catch (error) {
    console.log(error);
    this._notecollection =[]; 
  }
  
  console.log(`[set] ${this._notecollection}`)
}

 
constructor() { }

ngOnInit() {
    console.log(this.displaycontent);
    console.log(this.notecollection);
}

onNoteChange($event){
  this.notePayload.name = this.name;
  this.notePayload.time = new Date().toDateString();
  this.onnotechange.emit(this.notePayload);
}
}
