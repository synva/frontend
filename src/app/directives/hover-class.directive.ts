import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[spHover]'
})
export class HoverClassDirective {
  constructor(public elementRef: ElementRef) {}

  @Input('spHover') hoverClass: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
