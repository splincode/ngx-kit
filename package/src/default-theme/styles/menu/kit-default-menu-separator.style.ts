import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuSeparatorStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {parentDirection: 'vertical' | 'horizontal'}): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.menu.color);
    return {
      display: 'block',
      borderStyle: 'solid',
      borderColor: color.border,
      borderWidth: 0,
      ...this.def.pick(state.parentDirection, {
        vertical: {
          borderBottomWidth: 1,
          margin: [this.theme.params.grid.h / 2, 0],
        },
        horizontal: {
          borderRightWidth: 1,
          margin: [0, this.theme.params.grid.h / 2],
        },
      }, 'vertical'),
    };
  }
}
