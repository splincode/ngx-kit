import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuItemStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    disabled: boolean,
    menuDirection: 'horizontal' | 'vertical',
    hover: boolean,
    root: boolean,
    hasSubs: boolean,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.menu.color);
    return {
      display: 'flex',
      alignItems: 'center',
      borderBottom: [2, 'solid', 'transparent'],
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v / 2, params.grid.h],
      color: color.text,
      textDecoration: 'none',
      ...this.def.toggle(state.root, {
        ...this.def.pick(state.menuDirection, {
          horizontal: {
            padding: [params.grid.v, params.grid.h * 2],
            ...this.def.toggle(state.hover, {
              borderBottom: [2, 'solid', this.theme.colorMod(.05, color.border)],
              color: this.theme.colorMod(.05, color.text),
            }),
          },
          vertical: {
            ...this.def.toggle(state.hover, {
              color: this.theme.colorMod(.05, color.text),
            }),
          },
        }),
      }, {
        ...this.def.toggle(state.hover, {
          color: this.theme.colorMod(.05, color.text),
        }),
        ...this.def.toggle(state.hasSubs, {}),
      }),
      ...this.def.toggle(state.disabled, {
        color: '#888888',
      }),
    };
  }
}
