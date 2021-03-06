import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitPlatformBrowserModule } from '../kit-platform-browser/kit-platform-browser.module';
import { KitOutsideClickModule } from './index';

describe('KitOutsideClickDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TestComponent,
        ],
        imports: [
          CommonModule,
          KitPlatformBrowserModule,
          KitOutsideClickModule,
        ],
      });
  }));
  it('should emit when clicked outside', async(() => {
    fixture = createTestComponent(basicTemplate);
    fixture.detectChanges();
    const spy = spyOn(fixture.componentInstance, 'outsideClick');
    const outsideEl = fixture.debugElement.query(By.css('.outside'));
    outsideEl.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  }));
  it('should not emit when clicked inside', async(() => {
    fixture = createTestComponent(basicTemplate);
    fixture.detectChanges();
    const spy = spyOn(fixture.componentInstance, 'outsideClick');
    const outsideEl = fixture.debugElement.query(By.css('.inside'));
    outsideEl.nativeElement.click();
    expect(spy).toHaveBeenCalledTimes(0);
  }));
});

@Component({
  selector: 'test-cmp',
  template: '',
})
class TestComponent {
  outsideClick() {
  }
}

const basicTemplate = `
  <button class="inside" (kitOutsideClick)="outsideClick()"></button>
  <button class="outside"></button>
`;

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
    .createComponent(TestComponent);
}
