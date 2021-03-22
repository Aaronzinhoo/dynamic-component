import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';

import {DynamcComponentService} from 'src/app/dynamc-component.service';

import {ViewDirectiveDirective} from './view-directive.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DynamcComponentService],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(ViewDirectiveDirective, {static: true})
  appView: ViewDirectiveDirective;

  component: string = 'Default';

  constructor(private dynamicComponentService: DynamcComponentService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  // can be moved to service by passing viewContainerRef to component provider function instead of string
  loadComponent() {
    this.toggleComponent();

    // clear view of previously loaded component
    const viewContainerRef = this.appView.viewContainerRef;
    viewContainerRef.clear();

    this.dynamicComponentService.injectComponent(
      viewContainerRef,
      this.component
    );
  }

  toggleComponent() {
    this.component =
      this.component === 'SupriseComponent'
        ? 'HideSupriseComponent'
        : 'SupriseComponent';
  }
}
