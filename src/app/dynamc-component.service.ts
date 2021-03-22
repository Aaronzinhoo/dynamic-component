import {Component} from '@angular/compiler/src/core';
import {
  Injectable,
  Type,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import {FunLibInterface} from 'fun-lib';

@Injectable({
  providedIn: 'any',
})
export class DynamcComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  async injectComponent(
    viewContainerRef: ViewContainerRef,
    componentType: string
  ) {
    const componentLoader = this.getComponent(componentType);
    const component: FunLibInterface = await componentLoader();
    console.log(component.data);
    return viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(component as any)
    );
  }

  getComponent(componentType: string) {
    return () => import('fun-components-lib').then((lib) => lib[componentType]);
  }
}
