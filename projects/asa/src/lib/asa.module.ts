import { NgModule } from '@angular/core';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';



@NgModule({
  declarations: [
    ScrollAnimationDirective
  ],
  exports: [
    ScrollAnimationDirective,
  ]
})
export class AsaModule { }
