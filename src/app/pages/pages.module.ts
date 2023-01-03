import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectiveModule } from 'src/app/directives/directives.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { TopComponent } from './main/top/top.component';
import { SampleComponent } from './main/sample/sample.component';

@NgModule({
  declarations: [SigninComponent, ErrorComponent, MainComponent, TopComponent, SampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    DirectiveModule,
    PipesModule
  ],
  exports: [SigninComponent, ErrorComponent, MainComponent, TopComponent, SampleComponent]
})
export class PagesModule {}
