import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  DxSelectBoxModule, DxListModule, DxCheckBoxModule,
  DxNumberBoxModule, DxFormModule, DxTextAreaModule,
  DxDateBoxModule, DxButtonModule, DxTextBoxModule,
  DxMultiViewModule, DxCalendarModule, DxTemplateModule,
  DxLoadPanelModule, DxPopupModule, DxSwitchModule,
  DxDataGridModule, DxBoxModule, DxRadioGroupModule,
  DxScrollViewModule, DxGalleryModule, DxValidatorModule,
  DxTooltipModule, DxSpeedDialActionModule, DxAccordionModule,
  DxTabPanelModule
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    DxSelectBoxModule, DxListModule, DxCheckBoxModule,
  DxNumberBoxModule, DxFormModule, DxTextAreaModule,
  DxDateBoxModule, DxButtonModule, DxTextBoxModule,
  DxMultiViewModule, DxCalendarModule, DxTemplateModule,
  DxLoadPanelModule, DxPopupModule, DxSwitchModule,
  DxDataGridModule, DxBoxModule, DxRadioGroupModule,
  DxScrollViewModule, DxGalleryModule, DxValidatorModule,
  DxTooltipModule, DxSpeedDialActionModule, DxAccordionModule,
  DxTabPanelModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
