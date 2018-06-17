/*
  Simple example of a custom directive.

  The background color of element declare with this decorator will turn blue.

  Use HostListener to provide interative actions

  @HostBinding(PROPERTY_NAME) is able to access the element's properties by providing the property name.
    With this we can eliminate the use of renderer, however it is fine to use renderer as well.

  (defaultColor & highlightColor) inputs allows consumers to set colors for their needs, making overall
    more flexible.

  Note:
    1. Do not use ElementRef to make changes
      1.1 ElementRef allow direct access to the DOM which
            make your appication more vulnerable to XSS
            attack.
    2. Best practice is to use Renderer2 to modify
      2.1 Most common use methods:
        - this.renderer.addClass(...)
        - this.renderer.removeClass(...)
        - this.renderer.createElement(...)
        - this.renderer.createText(...)
        - this.renderer.appendChild(...)
        - this.renderer.setAttribute(...)
        - this.renderer.setStyle(...)
        - this.renderer.removeStyle(...)
        - this.renderer.setProperty(...)
    3. Angular will first check its own components then move on to basic html elements.
        Therefore, it knows that the input binding belongs its own component.
 */

import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.textAlign') textAlign = 'center';

  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Set the style of element on initialize
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'blue');

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'yellow');

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'transparent');

    this.backgroundColor = this.defaultColor;
  }

}
