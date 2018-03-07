import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public colService: ColorService) { }

  ngOnInit() {
  }

}
