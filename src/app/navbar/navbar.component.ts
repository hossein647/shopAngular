import { Component, HostListener,Renderer2,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  itemMenu: string[];
  itemSearchCategoreis: string[];
  itemSearchLocla: string[];
  hover = true;
  nav: any;
  toggler: any;
  link: any;
  helpic: boolean;


  constructor(private render: Renderer2, private router: Router) {
    this.itemMenu = ['موبایل', 'تبلت', 'کامپیوتر رومیزی', 'لپ تاپ', 'لوازم جانبی'];
    this.itemSearchCategoreis = ['موبایل', 'تبلت', 'کامپیوتر رومیزی', 'لپ تاپ', 'لوازم جانبی'];
    this.itemSearchLocla = ['مشهد', 'تهران', 'اصفهان', 'شیراز', 'تبریز'];
    this.hover = !this.hover;
    this.helpic = true;
  }
  ngOnInit() {
  }
  clickListener() {
    this.nav = document.querySelector('.navbar');
    this.toggler = document.querySelector('.navbar-toggler');
    this.link = document.querySelectorAll('.ul-1 li a');
    if (this.toggler.classList.contains('collapsed') && this.helpic) {
        this.render.addClass(this.nav, 'change-bg');
        for (let i = 0; i < this.link.length; i++) {
          this.render.addClass(this.link[i], 'change-link');
        }
        this.helpic = false;
        console.log('if');
    } else {
      setTimeout(() => {
        this.render.removeClass(this.nav, 'change-bg');
        this.helpic = true;
      }, 200)
      console.log('else');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollTop = window.scrollY;
    let nav = document.querySelector('.navbar');
    let aUl1 = document.querySelectorAll('.ul-1>li>a');
    let aUl2 = document.querySelector('.ul-2>.account>a');
    if (scrollTop > 115) {
      this.render.addClass(nav, 'scroll-change');
      this.render.addClass(aUl2, 'account-button-change');
      for (let i = 0; i < aUl1.length; i++) {
        this.render.addClass(aUl1[i], 'nav-a-change');
      }
    } else {
      this.render.removeClass(nav, 'scroll-change');
      this.render.removeClass(aUl2, 'account-button-change');
      for (let i = 0; i < aUl1.length; i++) {
        this.render.removeClass(aUl1[i], 'nav-a-change');
      }
    }
  }
}
