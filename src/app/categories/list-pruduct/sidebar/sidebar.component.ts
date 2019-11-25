import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lists = [
    { name: 'هتل و مسافرت', number: '۱۹', icon: 'lni-dinner' },
    { name: 'سرویس ها', number: '۱۱۷', icon: 'lni-control-panel' },
    { name: 'حیوانات اهلی', number: '۳۸', icon: 'lni-github' },
    { name: 'رستوران ها', number: '۸۹', icon: 'lni-coffee-cup' },
    { name: 'املاک', number: '۲۷۶', icon: 'lni-home' },
    { name: 'شغل', number: '۲۳۲', icon: 'lni-pencil' },
    { name: 'الکترونیک', number: '۴۸۱', icon: 'lni-display' }
  ]
}
