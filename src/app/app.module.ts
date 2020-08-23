import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, ComponentsModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
