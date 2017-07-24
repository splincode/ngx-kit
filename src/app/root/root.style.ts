import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';
import { ThemeService } from '../core/theme.service';

@Injectable()
export class RootStyle implements ComponentStyle {
  constructor(private def: StylerDefService,
              private theme: ThemeService,
              @Inject(kitTheme) private kitTheme: KitDefaultThemeService) {
  }

  footer(): StyleDef {
    return {
      background: this.theme.params.footerColor,
      padding: 16,
    };
  }

  header(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      background: this.theme.params.headerColor,
    };
  }

  host(): StyleDef {
    return {};
  }

  logo(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      padding: 16,
      background: '#0DD8DF',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600,
      boxSizing: 'border-box',
    };
  }

  menu(): StyleDef {
    return {
      padding: [0, 16],
      flexGrow: 1,
    }
  }

  themeButton(): StyleDef {
    return {
      padding: [0, this.kitTheme.params.grid.h * 2],
    }
  }
}
