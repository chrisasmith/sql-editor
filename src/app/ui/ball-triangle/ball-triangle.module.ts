import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BallTriangleComponent} from './ball-triangle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BallTriangleComponent],
  exports: [BallTriangleComponent],
})
export class BallTriangleModule { }
