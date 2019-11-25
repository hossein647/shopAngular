import {
  Component,
  OnInit,
  Renderer2,
  HostListener
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  HttpClientModule
} from '@angular/common/http';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  mobileMode: boolean;
  width: number;
  cards: boolean[];
  stars: boolean[];
  likeMobile: boolean[];
  likeTabletSlide1: boolean[];
  likeTabletSlide2: boolean[];
  likeTabletSlide3: boolean[];
  likeDesktopSlide1: boolean[];
  likeDesktopSlide2: boolean[];
  likeDesktopSlide3: boolean[];
  star_empty: boolean;
  star_fill: boolean;
  equal_element: boolean;
  all_stars_fill: boolean[];

  constructor(private render: Renderer2) {
    this.width = window.screen.width;
    this.screenWidth();
    this.cards = [false, false, false, false];
    this.stars = [false, false, false, false, false];
    this.likeMobile = [false, false, false, false, false, false, false, false, false];
    this.likeTabletSlide1 = [false, false];
    this.likeTabletSlide2 = [false, false];
    this.likeTabletSlide3 = [false, false];
    this.likeDesktopSlide1 = [false, false, false, false];
    this.likeDesktopSlide2 = [false, false, false, false];
    this.likeDesktopSlide3 = [false, false, false, false];

  }

  screenWidth() {
    if (this.width > 319 && this.width < 768) {
      this.mobileMode = true;
    } else if (this.width > 767 && this.width < 992) {
      this.mobileMode = false;
    }
  }

  ngOnInit() {

  }
  fill(el: any) {

    if (this.width > 319 && this.width < 768) {
      this.starFillOrEmpty(el);
    } else if (this.width > 767 && this.width < 992) {
      this.starFillOrEmpty(el);
    } else if (this.width > 991) {
      this.starFillOrEmpty(el);
    }
  }

  data = [
    [{
        title: "مک پرو",
        image: "lap-mouse.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۷۰۰",
        favorit: "",
        location: "ساری",
        stars: 'lni-star'
      },
      {
        title: "نیکون ۷۰۰",
        image: "pencil-camera.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۱۲۰",
        favorit: "",
        location: "ارومیه",
        stars: 'lni-star'
      },
      {
        title: "آیفون ایکس",
        image: "hand-mobile.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۳۰۰",
        favorit: "",
        location: "قزوین",
        stars: 'lni-star'
      },
      {
        title: "کیف قهوه ای",
        image: "bag.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۳۵",
        favorit: "",
        location: "سنندج",
        stars: 'lni-star'
      }
    ],
    [{
        title: "آی مک پرو",
        image: "imac-pro.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۲۰۰",
        favorit: "",
        location: "یزد",
        stars: 'lni-star'
      },
      {
        title: "منزل مسکونی ۶ خوابه",
        image: "home.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۷۰۰",
        favorit: "",
        location: "کرمان",
        stars: 'lni-star'
      },
      {
        title: "توپ بسکتبال",
        image: "ball.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۲۷",
        favorit: "",
        location: "قشم",
        stars: 'lni-star'
      },
      {
        title: "میز نهارخوری",
        image: "desk.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۱۵۰",
        favorit: "",
        location: "اهواز",
        stars: 'lni-star'
      }
    ],
    [{
        title: "آی مک پرو",
        image: "imac-pro.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۲۰۰",
        favorit: "",
        location: "یزد",
        stars: 'lni-star'
      },
      {
        title: "منزل مسکونی ۶ خوابه",
        image: "home.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۷۰۰",
        favorit: "",
        location: "کرمان",
        stars: 'lni-star'
      },
      {
        title: "توپ بسکتبال",
        image: "ball.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۲۷",
        favorit: "",
        location: "قشم",
        stars: 'lni-star'
      },
      {
        title: "میز نهارخوری",
        image: "desk.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۱۵۰",
        favorit: "",
        location: "اهواز",
        stars: 'lni-star'
      }
    ]
  ]
  dataSlideMobile = [
    [{
      title: "مک پرو",
      image: "lap-mouse.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۸۹",
      favorit: "",
      location: "ساری",
      stars: 'lni-star'
    }],
    [{
      title: "میز نهارخوری",
      image: "desk.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۱۵۰",
      favorit: "",
      location: "اهواز",
      stars: 'lni-star'
    }],
    [{
      title: "توپ بسکتبال",
      image: "ball.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۲۷",
      favorit: "",
      location: "قشم",
      stars: 'lni-star'
    }],
    [{
      title: "منزل مسکونی ۶ خوابه",
      image: "home.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۷۰۰",
      favorit: "",
      location: "کرمان",
      stars: 'lni-star'
    }],
    [{
      title: "کیف قهوه ای",
      image: "bag.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۳۵",
      favorit: "",
      location: "سنندج",
      stars: 'lni-star'
    }],
    [{
      title: "توپ بسکتبال",
      image: "ball.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۲۷",
      favorit: "",
      location: "قشم",
      stars: 'lni-star'
    }],
    [{
      title: "منزل مسکونی ۶ خوابه",
      image: "home.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۷۰۰",
      favorit: "",
      location: "کرمان",
      stars: 'lni-star'
    }],
    [{
      title: "آیفون ایکس",
      image: "hand-mobile.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۳۰۰",
      favorit: "",
      location: "قزوین",
      stars: 'lni-star'
    }],
    [{
      title: "نیکون ۷۰۰",
      image: "pencil-camera.jpg",
      subtitle: "متن لورم ایپسوم",
      price: "۱۲۰",
      favorit: "",
      location: "ارومیه",
      stars: 'lni-star'
    }],
  ]
  dataSlideTablet = [
    [{
        title: "نیکون ۷۰۰",
        image: "pencil-camera.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۱۲۰",
        favorit: "",
        stars: 'lni-star',
        location: "ارومیه"
      },
      {
        title: "آیفون ایکس",
        image: "hand-mobile.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۳۰۰",
        favorit: "",
        stars: 'lni-star',
        location: "قزوین"
      }
    ],
    [{
        title: "مک پرو",
        image: "lap-mouse.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۸۹",
        favorit: "",
        stars: 'lni-star',
        location: "ساری"
      },
      {
        title: "منزل مسکونی ۶ خوابه",
        image: "home.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۷۰۰",
        favorit: "",
        stars: 'lni-star',
        location: "کرمان"
      }
    ],
    [{
        title: "توپ بسکتبال",
        image: "ball.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۲۷",
        favorit: "",
        stars: 'lni-star',
        location: "قشم"
      },
      {
        title: "کیف قهوه ای",
        image: "bag.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۳۵",
        favorit: "",
        stars: 'lni-star',
        location: "سنندج"
      }
    ],
    [{
        title: "منزل مسکونی ۶ خوابه",
        image: "home.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۷۰۰",
        favorit: "",
        stars: 'lni-star',
        location: "کرمان"
      },
      {
        title: "میز نهارخوری",
        image: "desk.jpg",
        subtitle: "متن لورم ایپسوم",
        price: "۱۵۰",
        favorit: "",
        stars: 'lni-star',
        location: "اهواز"
      }
    ],
  ]

  starFillOrEmpty(el: any) {
    let el_stars = document.querySelectorAll(".case-device .carousel-item .box-card .box-rating i");
    for (let a = 0; a < el_stars.length; a++) {
      if (a < 4 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 4 && el == el_stars.item(4) && el_stars.item(4).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 4 && a < 9 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 9 && el == el_stars.item(a) && el_stars.item(9).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 9 && a < 14 && el_stars.item(a).className == "lni-star" && el == el_stars.item(a) && el_stars.item(a + 1).className == "lni-star-filled") {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 14 && el == el_stars.item(14) && el_stars.item(14).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 14 && a < 19 && el_stars.item(a).className == "lni-star" && el == el_stars.item(a) && el_stars.item(a + 1).className == "lni-star-filled") {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 19 && el == el_stars.item(19) && el_stars.item(19).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 19 && a < 24 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 24 && el == el_stars.item(24) && el_stars.item(24).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 24 && a < 29 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 29 && el == el_stars.item(29) && el_stars.item(29).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 29 && a < 34 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 34 && el == el_stars.item(34) && el_stars.item(34).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 34 && a < 39 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 39 && el == el_stars.item(39) && el_stars.item(39).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 39 && a < 44 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 44 && el == el_stars.item(44) && el_stars.item(44).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 44 && a < 49 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 49 && el == el_stars.item(49) && el_stars.item(49).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 49 && a < 54 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 54 && el == el_stars.item(54) && el_stars.item(54).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");
      } else if (a > 54 && a < 59 && el_stars.item(a).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
          console.log(a);
          this.render.removeClass(el, "lni-star");
          this.render.addClass(el, "lni-star-filled");
      } else if (a == 59 && el == el_stars.item(59) && el_stars.item(59).className == "lni-star") {
        console.log(a);
        this.render.removeClass(el, "lni-star");
        this.render.addClass(el, "lni-star-filled");

      } else if (a == 0 && el_stars.item(0).className == "lni-star-filled" && el == el_stars.item(0)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 0 && a < 4 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 4 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 5 && el_stars.item(5).className == "lni-star-filled" && el == el_stars.item(5)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 5 && a < 9 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 9 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 10 && el_stars.item(10).className == "lni-star-filled" && el == el_stars.item(10)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 10 && a < 14 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 14 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 15 && el_stars.item(15).className == "lni-star-filled" && el == el_stars.item(15)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 15 && a < 19 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 19 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 20 && el == el_stars.item(20) && el_stars.item(20).className == "lni-star-filled") {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 20 && a < 24 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 24 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 25 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 25 && a < 29 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 29 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 30 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 30 && a < 34 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 34 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 35 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 35 && a < 39 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 39 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 40 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 40 && a < 44 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 44 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 45 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 45 && a < 49 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 49 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 50 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 50 && a < 54 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 54 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 55 && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a > 55 && a < 59 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      } else if (a == 59 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
        console.log(a);
        this.render.removeClass(el, "lni-star-filled");
        this.render.addClass(el, "lni-star");
      }
    }
  }



  // starFillOrEmpty(el: any) {
  //   let el_stars = document.querySelectorAll(".case-device .carousel-item .box-card .box-rating i");
  //   let el_card = document.querySelector(".case-device .carousel-item .box-card");
  //   for (let a = 0; a < el_stars.length; a++) {
  //     if (a < 4 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (this.star_empty && el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 4 && el_stars.item(4).className == "lni-star" && el == el_stars.item(4)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 4 && a < 9 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (this.star_empty && el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 9 && el_stars.item(9).className == "lni-star" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 9 && a < 14 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (this.star_empty && this.equal_element && el_stars.item(a + 1).className == "lni-star-filled") {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 14 && el_stars.item(14).className == "lni-star") {
  //       if (el == el_stars.item(14)) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a > 14 && a < 19 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (this.star_empty && this.equal_element && el_stars.item(a + 1).className == "lni-star-filled") {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 19 && el == el_stars.item(19) && el_stars.item(19).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 19 && a < 24 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 24 && el == el_stars.item(24) && el_stars.item(24).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 24 && a < 29 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 29 && el == el_stars.item(29) && el_stars.item(29).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 29 && a < 34 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 34 && el == el_stars.item(34) && el_stars.item(34).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 34 && a < 39 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 39 && el == el_stars.item(39) && el_stars.item(39).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 39 && a < 44 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 44 && el == el_stars.item(44) && el_stars.item(44).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");
  //     } else if (a > 44 && a < 49 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 49 && el == el_stars.item(49) && el_stars.item(49).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");


  //     } else if (a > 49 && a < 54 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 54 && el == el_stars.item(54) && el_stars.item(54).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");


  //     } else if (a > 54 && a < 59 && el_stars.item(a).className == "lni-star") {
  //       this.star_empty = el_stars.item(a).className == "lni-star";
  //       this.equal_element = el == el_stars.item(a);
  //       if (el_stars.item(a + 1).className == "lni-star-filled" && this.equal_element) {
  //         console.log(a);
  //         this.render.removeClass(el, "lni-star");
  //         this.render.addClass(el, "lni-star-filled");
  //       }
  //     } else if (a == 59 && el == el_stars.item(59) && el_stars.item(59).className == "lni-star") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star");
  //       this.render.addClass(el, "lni-star-filled");

  //     } else if (a == 0 && el == el_stars.item(0) && el_stars.item(0).className == "lni-star-filled" && el == el_stars.item(0)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 0 && a < 4 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 4 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 5 && el == el_stars.item(5) && el_stars.item(5).className == "lni-star-filled" && el == el_stars.item(5)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 5 && a < 9 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 9 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 10 && el == el_stars.item(10) && el_stars.item(10).className == "lni-star-filled" && el == el_stars.item(10)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 10 && a < 14 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 14 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 15 && el == el_stars.item(15) && el_stars.item(15).className == "lni-star-filled" && el == el_stars.item(15)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 15 && a < 19 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 19 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 20 && el == el_stars.item(20) && el_stars.item(20).className == "lni-star-filled") {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 20 && a < 24 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 24 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 25 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 25 && a < 29 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 29 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 30 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 30 && a < 34 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 34 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 35 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 35 && a < 39 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 39 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 40 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 40 && a < 44 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 44 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 45 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 45 && a < 49 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 49 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 50 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 50 && a < 54 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 54 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 55 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a > 55 && a < 59 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a + 1).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     } else if (a == 59 && el_stars.item(a - 1).className == "lni-star" && el_stars.item(a).className == "lni-star-filled" && el == el_stars.item(a)) {
  //       console.log(a);
  //       this.render.removeClass(el, "lni-star-filled");
  //       this.render.addClass(el, "lni-star");
  //     }
  //   }
  // }
}
