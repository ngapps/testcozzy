import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[czDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened() {

    return this.isOpen;
  }

  private isOpen = false;
}
