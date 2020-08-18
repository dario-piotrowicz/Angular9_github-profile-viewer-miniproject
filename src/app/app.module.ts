import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersButtonsContainerComponent } from './components/users-buttons-container/users-buttons-container.component';
import { UserButtonComponent } from './components/users-buttons-container/user-button/user-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersButtonsContainerComponent,
    UserButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
