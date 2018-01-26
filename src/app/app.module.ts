import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONFIG, AppConfig } from './config/app.config';
import { SiteModule } from './site/site.module'
import { AppComponent } from './app.component';
import { PopupModule } from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SiteModule,
    PopupModule.forRoot()
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
