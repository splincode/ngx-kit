import { Directive, ElementRef, Input, OnDestroy, Optional, } from '@angular/core';
import { KitFocusManagerService } from '../kit-focus-manager.service';

/**
 * Directive that registered in `KitFocusManagerService` and can be focused from outside.
 */
@Directive({
  selector: '[kitFocus]',
})
export class KitFocusDirective implements OnDestroy {
  /**
   * Element id.
   */
  @Input() kitFocus: string | number;

  constructor(
    @Optional() private service: KitFocusManagerService,
    private el: ElementRef,
  ) {
    if (this.service) {
      this.service.register(this);
    }
  }

  ngOnDestroy() {
    if (this.service) {
      this.service.remove(this);
    }
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
