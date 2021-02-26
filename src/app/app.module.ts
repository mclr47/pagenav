import { ScrollService } from './services/scroll.service';

// import { ScrollItem } from 'app/shared/scroll-spy.service';
import { TocItem, TocService } from './../app/services/toc.service';
import { TocModule } from './comp/toc/toc.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollSpyService, ScrollSpiedElement,ScrollSpiedElementGroup} from './services/scroll-spy.service';


@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TocModule 
  ],
  providers: [TocService, ScrollService,ScrollSpyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
