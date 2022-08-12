import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:"[appDropDown]"
})
export class DropDownDirective{
    @HostBinding("class.open") isOpen = false;
    // @HostListener("click") toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
    constructor(private eleRef:ElementRef){

    }
    @HostListener("document:click",['$event']) toggleOpen(event:Event){
        this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}