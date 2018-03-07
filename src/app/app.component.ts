import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public colService: ColorService) {

  }

  title = 'app';
  test = 'Bonjour';
  settings = this.colService.settings;

  handleChange(v) {
    this.test = v;
  }

  changeColor(coolor) {
    this.settings.col = coolor;
  }
}
