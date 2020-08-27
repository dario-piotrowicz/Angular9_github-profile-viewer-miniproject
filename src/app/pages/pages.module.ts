import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';

import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomePageComponent,
    UserDetailsPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ComponentsModule,
    ServicesModule,
  ],
  exports: [HomePageComponent, UserDetailsPageComponent, PageNotFoundComponent],
})
export class PagesModule {}
