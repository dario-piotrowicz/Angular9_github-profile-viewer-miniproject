import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';

import { UsersButtonsContainerModule } from '../components/users-buttons-container/users-buttons-container.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UsersButtonsContainerModule,
  ],
  exports: [HomeComponent],
})
export class PagesModule {}
