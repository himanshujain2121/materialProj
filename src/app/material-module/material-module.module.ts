import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    ScrollingModule
  ],
  exports: [
    MatSidenavModule,
    ScrollingModule
  ]
})
export class MaterialModuleModule { }
