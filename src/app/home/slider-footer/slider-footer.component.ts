import {
  Component,ViewChildren, QueryList, ElementRef, Renderer2, OnInit
} from '@angular/core';

@Component({
  selector: 'app-slider-footer',
  templateUrl: './slider-footer.component.html',
  styleUrls: ['./slider-footer.component.css']
})
export class SliderFooterComponent{
  
  screenWidth:number;
  mobileSize:boolean;

  constructor(private render:Renderer2){
    this.screenWidth = window.screen.width;
    console.log(window.screen.width);
    this.getScreenWidth();
    console.log(this.mobileSize);
  }

  @ViewChildren("div") private div: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.render.addClass(this.div.toArray()[0].nativeElement, "active");
  }
  
  getScreenWidth(){
    if(this.screenWidth < 768){
      this.mobileSize = true;
    }else if(this.screenWidth > 767 && this.screenWidth < 992) {
      this.mobileSize = false;
    }
  }

  test(e:any){
    console.log(e);
  }

  slides = [
   [{title: 'حبیب',
   describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',image: './assets/image/circle_1.jpg',}, {title: 'سارا', describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
   image: './assets/image/circle_2.jpg'}],

   [{title: 'الیزابت',
   describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',image:'./assets/image/circle_3.jpg'}, {title: 'بهرام', describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
   image:'./assets/image/circle_4.jpg'}],

   [{title: 'مانی',
   describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',image: './assets/image/circle_5.jpg'}, {title: 'سامان', describtion:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
   image: './assets/image/circle_6.jpg'}]
  ]

}
