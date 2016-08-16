import { Component } from '@angular/core';
import { Main }  from './containers/main';

@Component({
  selector: 'app',
  directives: [ Main ],
  template: `
  <div>
    <main-container></main-container>
  </div>
  `
})

export class App {};