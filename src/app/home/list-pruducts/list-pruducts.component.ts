import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pruducts',
  templateUrl: './list-pruducts.component.html',
  styleUrls: ['./list-pruducts.component.css']
})
export class ListPruductsComponent implements OnInit {
  ngOnInit(): void {
    
  }

  hover:boolean[];
  changeHeart:boolean[];

  constructor(){
    this.hover = [false , false , false , false , false , false];
    this.changeHeart = [false, false, false, false, false, false];
  }

  srcListPruduct = [
    { title: "دوربین کانن",
     lastUpdate: "۵ ساعت پیش", 
     name:"camera.jpg",     
     category: "الکترونیک",
     location: "تهران",
     date: "۹۷/۱۲/۱",
     author: "مهران سلامتی",
     newOrUsing: "دست دوم",
     price: "۱۵۰",
     textVerified: "تایید شده"
     },
    { title: "خودروی سری 5 بی ام دبلیو",
     lastUpdate: "۳ ساعت پیش", 
     name: "car.jpg",       
     category: "خودرو" ,
     location: "مشهد",
     date: "۹۸/۱/۲۴",
     author: "محسن  دوستیان",
     newOrUsing: "آکبند",
     price: "۳۵.۰۰۰",
     textVerified: ""
     },
    { title: "خانه جاودیی برای زندگی",
     lastUpdate: "۲ ساعت پیش", 
     name: "home.jpg",      
     category: "املاک" ,
     location: "شیراز",
     date: "۹۸/۲/۵",
     author: "سارا منجی",
     newOrUsing: "دست دوم",
     price: "۷۰۰.۰۰۰",
     textVerified: "تایید شده"
     },
    { title: "مک بوک پرو 13 اینچ",
     lastUpdate: "۱ ساعت پیش", 
     name: "laptop.jpg",    
     category: "لپ تاپ" ,
     location: "کرمانشاه",
     date: "۹۸/۲/۱۴",
     author: "جمال هدایتی",
     newOrUsing: "آکبند",
     price: "۱.۵۰۰",
     textVerified: "تایید شده"
     },
    { title: "گوشی آیفون ایکس",
     lastUpdate: "۲ ساعت پیش", 
     name: "mobile.jpg",    
     category: "موبایل" ,
     location: "زاهدان",
     date: "۹۸/۳/۲۷",
     author: "سیمین بهرامی",
     newOrUsing: "دست دوم",
     price: "۸۰۰",
     textVerified: "تایید شده"
     },
    { title: "غذاهای لذیذ",
     lastUpdate: "۶ ساعت پیش", 
     name: "resturant.jpg", 
     category: "سوپرمارکت" ,
     location: "رشت",
     date: "۹۸/۴/۱۱",
     author: "دارا سلطانی",
     newOrUsing: "آکبند",
     price: "۱۵",
     textVerified: ""
     },
]

}
