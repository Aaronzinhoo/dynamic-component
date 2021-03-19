import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {ViewDirectiveDirective} from './view-directive.directive';
import {DynamcComponentService} from 'src/app/dynamc-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DynamcComponentService],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(ViewDirectiveDirective, {static: true})
  appView: ViewDirectiveDirective;

  component: string = 'ucla';
  dynamicComponentService: DynamcComponentService = new DynamcComponentService();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {}

  // can be moved to service by passing viewContainerRef to component provider function instead of string
  loadComponent() {
    this.toggleComponent();

    // get next component blueprint into factory
    const nextComponent = this.dynamicComponentService.getComponent(
      this.component
    );
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      nextComponent
    );

    // clear view of previously loaded component
    const viewContainerRef = this.appView.viewContainerRef;
    if (viewContainerRef !== null) {
      viewContainerRef.clear();
    }

    // for similar component types can type createComponent so data can be added dynamically
    // this creates the component passed in the location where appView Directive is
    viewContainerRef.createComponent(componentFactory);
  }

  toggleComponent() {
    this.component = this.component === 'ucla' ? 'surprise' : 'ucla';
  }
}
