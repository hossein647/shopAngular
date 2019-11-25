import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './app-package.component.html',
  styleUrls: ['./app-package.component.css']
})
export class AppPackageComponent implements OnInit {

  hover:boolean;
  constructor() {
    this.hover = false;
   }

  ngOnInit() {
  }

  dataCard = [
    { icon: 'lni-layers', title: 'طلائی', price: '۹۹', feature1: '۲۰ ویژگی پیشرفته دارد', feature2: '۳۰ روزه'},
    { icon: 'lni-gift', title: 'نقره ای', price: '۸۹', feature1: '۶ ویژگی پیشرفته دارد', feature2: '۲۵ روزه'},
    { icon: 'lni-leaf', title: 'برنزی', price: '۲۹', feature1: 'ویژگی پیشرفته ندارد', feature2: '۲۰ روزه'}
  ]
}
