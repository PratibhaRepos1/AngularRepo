import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UxValPipe } from './ux-val.pipe';
import { DemoComponent } from './demo/demo.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from "@angular/forms";
import { CustomSortPipe } from './custom-sort.pipe';
import { SortdataComponent } from './sortdata/sortdata.component';
import { MultisortPipe } from './multisort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UxValPipe,
    DemoComponent,
    FilterPipe,
    CustomSortPipe,
    SortdataComponent,
    MultisortPipe
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
