import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { KitComponentStyle, kitComponentTag } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

/**
 * @todo <tag-group>
 * @todo [closable]
 * @todo colors presets
 */
@Component({
  selector: 'kit-tag,[kit-tag],[kitTag]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitTagComponent implements OnInit {
  @Input() kitTag: any;

  @HostBinding('style.backgroundColor') styleBackgroundColor: string;

  @HostBinding('style.borderColor') styleBorderColor: string;

  @HostBinding('style.color') styleColor: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentTag) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set color(color: string) {
    this.styleBackgroundColor = color;
    this.styleBorderColor = color;
  };

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  };

  @Input()
  set textColor(color: string) {
    this.styleColor = color;
  };

  ngOnInit() {
  }
}
