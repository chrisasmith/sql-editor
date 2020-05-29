import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputViewerComponent } from './output-viewer.component';
import { InformationComponent } from './information/information.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [OutputViewerComponent, InformationComponent, ResultsComponent],
  exports: [OutputViewerComponent, InformationComponent, ResultsComponent],
  imports: [
    CommonModule
  ]
})
export class OutputViewerModule { }
