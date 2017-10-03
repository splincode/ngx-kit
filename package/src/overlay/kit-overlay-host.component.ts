import { ChangeDetectionStrategy, Component, DoCheck, Input, ViewContainerRef, } from '@angular/core';
import { KitOverlayService } from './kit-overlay.service';

@Component({
  selector: 'kit-overlay-host,[kitOverlayHost]',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitOverlayHostComponent implements DoCheck {
  @Input() kitOverlayHost: void;

  constructor(public vcr: ViewContainerRef,
              private service: KitOverlayService) {
    this.service.registerHost(this);
  }

  ngDoCheck() {
    this.service.hostDoCheckEmit();
  }
}