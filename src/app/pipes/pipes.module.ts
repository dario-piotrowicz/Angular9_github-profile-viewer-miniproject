import { NgModule } from '@angular/core';
import { KBDisplayPipe } from './kb-display.pipe';

@NgModule({
  declarations: [KBDisplayPipe],
  exports: [KBDisplayPipe],
})
export class PipesModule {}
