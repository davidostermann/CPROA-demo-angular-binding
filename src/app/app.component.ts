import { Component, OnInit } from '@angular/core';
import { ColorService } from './color.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentRoute: String;

  constructor(public colService: ColorService, private route: ActivatedRoute) {}

  title = 'app';
  test = 'Bonjour';
  settings = this.colService.settings;

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.currentRoute = params.get('pou');
    //   console.log(this.currentRoute);
    // });
  }

  handleChange(v) {
    this.test = v;
  }

  changeColor(coolor) {
    this.settings.col = coolor;
  }
}
