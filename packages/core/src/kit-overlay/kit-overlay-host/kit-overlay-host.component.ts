import { ChangeDetectionStrategy, Component, NgZone, ViewContainerRef, } from '@angular/core';

/**
 * @internal
 */
@Component({
  selector: 'kit-overlay-host',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostComponent {
  constructor(
    public zone: NgZone,
    public vcr: ViewContainerRef,
  ) {
  }
}
