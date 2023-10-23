import { ElementRef, inject } from "@angular/core";

export function provideExample(): any {
  return inject(ElementRef).nativeElement;
}
