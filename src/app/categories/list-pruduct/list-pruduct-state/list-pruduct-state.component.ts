import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-pruduct-state',
  templateUrl: './list-pruduct-state.component.html',
  styleUrls: ['./list-pruduct-state.component.css']
})
export class ListPruductStateComponent implements OnInit {

  hover: boolean[];
  hovered: boolean;
  like: boolean[];
  // @Input() grid: any;
  constructor() { 
    this.hover = [];
    this.hovered = !this.hovered;
    this.like = [];
  }


  dataCard = [
    { brand: 'فراری', image: './assets/image/car.jpg', title: 'اتوموبیل لوکس', hour: '۱', local: 'تهران', user: 'سارا', date: '۹۸/۰۲/۱۵', state: 'آکبند', price: '۳۵۰۰' },
    { brand: 'کانن', image: './assets/image/camera.jpg', title: 'دوربین کانن', hour: '۴', local: 'شیراز', user: 'محسن', date: '۹۸/۰۵/۰۹', state: 'دست دوم', price: '۲۷۰' },
    { brand: 'فیبا', image: './assets/image/ball.jpg', title: 'توپ حرفه ای بسکتبال', hour: '۳', local: 'یزد', user: 'لاله', date: '۹۸/۰۶//۱۰', state: 'آکبند', price: '۵۰' },
    { brand: 'چرمکده', image: './assets/image/bag.jpg', title: 'کیف چرمی زنانه', hour: '۸', local: 'کرج', user: 'فرزاد', date: '۹۸/۰۴/۲۷', state: 'آکبند', price: '۷۰' }
  ];

  ngOnInit() {
  }

}
