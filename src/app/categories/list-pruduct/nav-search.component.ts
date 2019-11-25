import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search-component.html',
  styleUrls: ['./nav-search-component.css']
})
// tslint:disable-next-line:class-name
export class navSearchComponent implements OnInit {

  test: boolean;
  constructor() {
    this.test = true;
  }

  ngOnInit() {

  }

}
