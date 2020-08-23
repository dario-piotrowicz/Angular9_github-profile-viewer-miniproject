import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UsersButtonsContainerModule } from './components/users-buttons-container/users-buttons-container.module';

const angularImports = [BrowserModule, FormsModule, HttpClientModule];

const projectImports = [UsersButtonsContainerModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...angularImports, ...projectImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
