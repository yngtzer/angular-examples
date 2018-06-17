import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCodeSection]'
})

export class CodeSectionDirective implements OnInit {

  @Input() align = 'center';

  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', '#CBC6C5');
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.elmRef.nativeElement, 'padding', '10px 0px');
    this.renderer.setStyle(this.elmRef.nativeElement, 'text-align', this.align);
    this.renderer.setStyle(this.elmRef.nativeElement, 'color', 'green');
    this.renderer.setStyle(this.elmRef.nativeElement, 'font-family', 'monospace');
    this.renderer.setStyle(this.elmRef.nativeElement, 'font-weight', 'bold');
  }

}
