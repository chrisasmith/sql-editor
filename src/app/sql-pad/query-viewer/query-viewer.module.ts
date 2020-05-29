import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryViewerComponent } from './query-viewer.component';
import {FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';



@NgModule({
  declarations: [QueryViewerComponent],
  exports: [QueryViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
  ]
})
export class QueryViewerModule { }
