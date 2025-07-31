import { Component } from '@angular/core';
import { } from '@angular-architects/native-federation/';

declare const require: any;

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-mfe';

  ngVersion = require('../../package.json').dependencies['@angular/core'];
}
