import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  arrays = ['blue', 'red', 'white', 'black', 'pink'];
  index = 0;

  constructor(private e: ElementRef) {
  }

  @HostListener('click') foo() {
    this.e.nativeElement.style.color = this.arrays[this.index];
    this.index = (this.index + 1) % this.arrays.length;
  }

}
