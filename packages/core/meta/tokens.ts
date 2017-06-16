import { InjectionToken } from '@angular/core';

import { KitThemeService } from './theme';
// buttons
import { KitButtonStyle } from './components/button-style';
// forms
import { KitAutoCompleteStyle } from './components/auto-complete-style';
import { KitDatePickerStyle } from './components/date-picker-style';
import { KitFormErrorStyle } from './components/form-error-style';
import { KitFormGroupStyle } from './components/form-group-style';
import { KitFormLabelStyle } from './components/form-label-style';
import { KitInputStyle } from './components/input-style';
import { KitMathInputStyle } from './components/math-input-style';
import { KitSelectStyle } from './components/select-style';


export const kitTheme = new InjectionToken<KitThemeService>('kitTheme');
// buttons
export const kitComponentButton = new InjectionToken<KitButtonStyle>('kitComponentButton');
// forms
export const kitComponentAutoComplete = new InjectionToken<KitAutoCompleteStyle>('kitComponentAutoComplete');
export const kitComponentDatePicker = new InjectionToken<KitDatePickerStyle>('kitComponentDatePicker');
export const kitComponentFormError = new InjectionToken<KitFormErrorStyle>('kitComponentFormError');
export const kitComponentFormGroup = new InjectionToken<KitFormGroupStyle>('kitComponentFormGroup');
export const kitComponentFormLabel = new InjectionToken<KitFormLabelStyle>('kitComponentFormLabel');
export const kitComponentInput = new InjectionToken<KitInputStyle>('kitComponentInput');
export const kitComponentMathInput = new InjectionToken<KitMathInputStyle>('kitComponentMathInput');
export const kitComponentSelect = new InjectionToken<KitSelectStyle>('kitComponentSelect');