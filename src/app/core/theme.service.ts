import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeDefaultParams, KitDefaultThemeService, kitTheme, } from '@ngx-kit/ngx-kit';
import { darkPreset } from './presets/dark';
import { light2Preset } from './presets/light2';

@Injectable()
export class ThemeService {
  params: {
    sideWidth: number;
    contentColor: string;
    headerColor: string;
    sideColor: string;
    footerColor: string;
    logoColor: string;
    textColor: string;
  };

  constructor(@Inject(kitTheme) private kitThemeService: KitDefaultThemeService) {
  }

  applyTheme(name: string) {
    switch (name) {
      case 'default': {
        const preset = new KitDefaultThemeDefaultParams();
        this.params = {
          sideWidth: 300,
          contentColor: '#fff',
          headerColor: '#eee',
          sideColor: '#ddd',
          footerColor: '#eee',
          logoColor: '#09D7DE',
          textColor: '#333',
        };
        this.kitThemeService.applyParams(preset);
        break;
      }
      case 'dark': {
        this.params = {
          sideWidth: 300,
          contentColor: '#101010',
          headerColor: '#1c1c1c',
          sideColor: '#262626',
          footerColor: '#1c1c1c',
          logoColor: '#09D7DE',
          textColor: '#e2e2e2',
        };
        this.kitThemeService.applyParams(JSON.parse(darkPreset));
        break;
      }
      case 'light2': {
        this.params = {
          sideWidth: 300,
          contentColor: '#fff',
          headerColor: '#fbfbfb',
          sideColor: '#f0f0f1',
          footerColor: '#fbfbfb',
          logoColor: '#09D7DE',
          textColor: '#333',
        };
        this.kitThemeService.applyParams(JSON.parse(light2Preset));
        break;
      }
    }
  }
}
