import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[EditClass]'
})
export class EditClassDirective implements OnInit {
  
  constructor(private render:Renderer2 , private elref:ElementRef) { }
  
  ngOnInit():any {
   this.render.addClass(this.elref.nativeElement, 'active');
   this.render.addClass(this.elref.nativeElement, 'active');
  //  this.render.addClass(this.elref.nativeElement[1], 'active');
  //  this.render.addClass(this.elref.nativeElement[1], 'active');
    // console.log(this.render.addClass(this.elref.nativeElement, 'active'));
  }
}
