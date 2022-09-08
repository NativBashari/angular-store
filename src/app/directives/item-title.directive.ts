import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ItemTitle]'
})
export class ItemTitleDirective {
el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
   }
   @HostListener('mouseover') onMouseOver(){
    this.el.style.backgroundColor = 'yellow';
   }
   @HostListener('mouseleave') OnMouseLeave(){
    this.el.style.backgroundColor = 'transparent';
   }

}
