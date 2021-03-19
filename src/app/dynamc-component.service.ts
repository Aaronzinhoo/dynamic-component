import {Component} from '@angular/compiler/src/core';
import {Injectable, Type} from '@angular/core';
import {SupriseComponent} from 'src/app/suprise/suprise.component';
import {UclaRocksComponent} from 'src/app/ucla-rocks/ucla-rocks.component';

@Injectable({
  providedIn: 'any',
})
export class DynamcComponentService {
  components = {ucla: UclaRocksComponent, surprise: SupriseComponent};

  constructor() {}

  getComponent(componentType: string) {
    return this.components[componentType];
  }
}
