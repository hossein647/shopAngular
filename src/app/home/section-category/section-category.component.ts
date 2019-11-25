import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-section-category',
  templateUrl: './section-category.component.html',
  styleUrls: ['./section-category.component.css']
})
export class SectionCategoryComponent {
  changeColor: boolean[];

  constructor() {
    this.changeColor = [false,false,false];
  }

  categories = [
    { title: 'موبایل', icon: 'lni-mobile' },
    { title: 'تبلت',   icon: 'lni-tab' },
    { title: 'لپ تاپ', icon: 'lni-laptop' },
    { title: 'کامپیوتر', icon: 'lni-display-alt' },
    { title: 'پوشیدنی', icon: 'lni-heart-monitor' },
    { title: 'پوشاک', icon: 'lni-tshirt' },
    { title: 'لوازم التحریر', icon: 'lni-school-compass' },
    { title: 'سوپرمارکت', icon: 'lni-shopping-basket' },
    { title: 'خودرو', icon: 'lni-car' },
    { title: 'املاک', icon: 'lni-home' },
    { title: 'کتاب', icon: 'lni-book' },
    { title: 'آموزشی', icon: 'lni-graduation' },
  ];
}
