import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appView]',
})
export class ViewDirectiveDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
