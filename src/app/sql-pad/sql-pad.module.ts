import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlPadComponent } from './sql-pad.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {QueryViewerModule} from './query-viewer/query-viewer.module';
import {TabsComponent} from './tabs/tabs.component';
import {OutputViewerModule} from './output-viewer/output-viewer.module';



@NgModule({
  declarations: [SqlPadComponent, MenuComponent, TabsComponent],
  exports: [SqlPadComponent, MenuComponent, TabsComponent],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,

    QueryViewerModule,
    OutputViewerModule
  ]
})
export class SqlPadModule {
  private readonly iconUrl = 'assets/icons';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl(`${this.iconUrl}/Search.svg`));
    iconRegistry.addSvgIcon('database', sanitizer.bypassSecurityTrustResourceUrl(`${this.iconUrl}/Database.svg`));
    iconRegistry.addSvgIcon('blue-plus', sanitizer.bypassSecurityTrustResourceUrl(`${this.iconUrl}/plusBlue.svg`));
  }
}
