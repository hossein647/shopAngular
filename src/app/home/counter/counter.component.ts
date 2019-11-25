import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  ngOnInit() {}

  test: boolean;
  counter: boolean[];

  constructor() {
    this.counter = [false, false, false, false];
    this.test = true;
  }

  data = [{
      text: 'تبلیغات فعال',
      className: 'lni-layers',
      classH1: 'num1',
      number: '2500'
    },
    {
      text: 'مناطق',
      className: 'lni-map',
      classH1: 'num2',
      number: '2500'
    },
    {
      text: 'اعضای فعال',
      className: 'lni-user',
      classH1: 'num3',
      number: '2500'
    },
    {
      text: 'تبلیغات ویژه',
      className: 'lni-briefcase',
      classH1: 'num4',
      number: '2500'
    }
  ]


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scroll = window.scrollY;
    let element = document.querySelector("#counter").scrollHeight;
    let positionElement = scroll - element;
    if (positionElement > 2800 && this.test == true) {
      this.test = false;
      let i:number;
      for (i = 0; i < 23455; i++) {
        (function (i: number) {
          setTimeout(function () {
            if (i > 0 && i < 12091) {
              document.querySelector(".box-data .num1").textContent = '' + i;
            }
            if (i > 0 && i < 351) {
              document.querySelector(".box-data .num2").textContent = '' + i;
            }
            if (i > 0 && i < 23454) {
              document.querySelector(".box-data .num3").textContent = '' + i;
            }
            if (i > 0 && i < 251) {
              document.querySelector(".box-data .num4").textContent = '' + i;
            }
          }, 100);
        })(i);
      }
    }
  }
}
