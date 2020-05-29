import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoadingIndicatorInterceptor, LoadingIndicatorService} from './services/loading-indicator.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoadingModule} from './ui/loading/loading.module';
import {SqlPadModule} from './sql-pad/sql-pad.module';
import {MatIconModule, MatIconRegistry} from '@angular/material';
import {MonacoEditorModule} from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


    MatIconModule,

    LoadingModule,
    SqlPadModule
  ],
  providers: [
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: ( service: LoadingIndicatorService ) => new LoadingIndicatorInterceptor( service ),
      multi: true,
      deps: [ LoadingIndicatorService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly iconUrl = 'assets/icons';
  private readonly logoUrl = 'assets/logos';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('avalancheMountain', sanitizer.bypassSecurityTrustResourceUrl(`${this.logoUrl}/avalanche_logo.svg`));
  }
}
