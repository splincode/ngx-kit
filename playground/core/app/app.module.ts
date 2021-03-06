import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitOverlayModule, KitPlatformBrowserModule, KitRootModule } from '@ngx-kit/core';
import { AppComponent } from './app.component';
import { VcComponent } from './vc/vc.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    KitRootModule,
    KitPlatformBrowserModule,
    KitOverlayModule,
  ],
  declarations: [
    AppComponent,
    VcComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VcComponent],
})
export class AppModule {
}
