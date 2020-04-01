import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInGridComponent } from './check-in-grid/check-in-grid.component';
import { CheckInPopupComponent } from './check-in-popup/check-in-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckInGridComponent,
    CheckInPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
