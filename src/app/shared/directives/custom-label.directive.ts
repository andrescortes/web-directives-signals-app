import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('Hello CustomLabelDirective Directive');
    console.log(el);
    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = 'throw an error';
  }
  ngOnInit(): void {
    console.log('Hello CustomLabelDirective Directive in OnInit');
  }

}
