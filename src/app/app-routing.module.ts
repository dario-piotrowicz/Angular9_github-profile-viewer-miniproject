import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
