import { Directive,HostListener,HostBinding, ElementRef } from '@angular/core';
@Directive({
selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(private _el: ElementRef) { }

@HostBinding('class.open') isOpen = false;


@HostListener('document:click', ['$event.path']) toggleOpen() {
    this.isOpen = !this.isOpen;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show') ;
 
}}