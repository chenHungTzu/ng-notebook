import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NgNotebookComponent } from './ng-notebook/ng-notebook.component';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NgNotebookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    CommonModule ,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  entryComponents:[
    NgNotebookComponent
  ]
})
export class AppModule {
  constructor(private injector : Injector){
    const comppnent = createCustomElement(NgNotebookComponent, { injector });
    customElements.define('ng-notebook', comppnent); 
  }

  ngDoBootstrap() {}

}
