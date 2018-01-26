import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { throwIfAlreadyLoaded } from '../common/module-import-guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FunnelComponent } from './funnel/funnel.component';
import { PhoneNumberValidatorDirective } from '../common/validators/phone-validator';
import { ModalComponent } from '../directives/modal.component';
import { ModalService } from '../services/modal.service';
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopupModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FunnelComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FunnelComponent,
    PhoneNumberValidatorDirective,
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})

export class SiteModule {
  constructor(@Optional() @SkipSelf() parentModule: SiteModule) {
    throwIfAlreadyLoaded(parentModule, 'SiteModule');
  }
}
