// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TocComponent } from './toc.component';

// @NgModule({
//   declarations: [TocComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class TocModule { }
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WithCustomElementComponent } from '../../services/element-registry';
import {ScrollSpyService, ScrollSpiedElement,ScrollSpiedElementGroup} 
from './../../services/scroll-spy.service';
import { ScrollService } from './../../services/scroll.service';

// import { ScrollItem } from 'app/shared/scroll-spy.service';
import { TocItem, TocService } from './../../services/toc.service'
import { TocComponent } from './toc.component';

@NgModule({
  imports: [ CommonModule, MatIconModule ],
  declarations: [ TocComponent],
  entryComponents: [ TocComponent ],
  exports: [TocComponent],
  providers :[ScrollSpyService,ScrollService,TocService ]
})
export class TocModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = TocComponent;
}
