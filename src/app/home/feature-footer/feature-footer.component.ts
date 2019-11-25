import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-footer',
  templateUrl: './feature-footer.component.html',
  styleUrls: ['./feature-footer.component.css']
})
export class FeatureFooterComponent {


  constructor() { }

  cards = [
    { title: 'تازگی در ساخت', icon: 'lni-grid', describtion: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
    { title: 'شخصی سازی آسان', icon: 'lni-brush', describtion: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
    { title: 'پشتیبانی ۲۴/۷', icon: 'lni-headphone-alt', describtion: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'}
  ]

}
