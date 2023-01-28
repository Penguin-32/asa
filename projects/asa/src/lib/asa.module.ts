import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';



@NgModule({
  declarations: [
    ScrollAnimationDirective
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    ScrollAnimationDirective,
  ]
})
export class AsaModule { }
