import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { kitComponentAccordion, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitAccordionPanelComponent } from './kit-accordion-panel.component';

@Component({
  selector: 'kit-accordion,[kit-accordion],[kitAccordion]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAccordionComponent implements OnInit, AfterContentInit {
  @Input() firstActivate = true;

  @Input() kitAccordion: any;

  @Input() multiple = false;

  @ContentChildren(KitAccordionPanelComponent) panels: QueryList<KitAccordionPanelComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAccordion) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  };

  ngAfterContentInit() {
    this.activateFirst();
    this.subscribeOnActivations();
  }

  ngOnInit() {
  }

  private activateFirst() {
    if (this.firstActivate) {
      if (!this.panels.find(p => p.active)) {
        this.panels.first.active = true;
      }
    }
  }

  private subscribeOnActivations() {
    this.panels.forEach(p => p.activate.subscribe(() => {
      if (!this.multiple) {
        this.panels.filter(pa => pa !== p).forEach(pb => {
          pb.active = false;
        });
      }
    }));
  }
}