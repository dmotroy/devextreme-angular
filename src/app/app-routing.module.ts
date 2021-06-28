import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
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

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxSelectBoxModule, DxListModule, DxCheckBoxModule,
    DxNumberBoxModule, DxFormModule, DxTextAreaModule,
    DxDateBoxModule, DxButtonModule, DxTextBoxModule,
    DxMultiViewModule, DxCalendarModule, DxTemplateModule,
    DxLoadPanelModule, DxPopupModule, DxSwitchModule,
    DxDataGridModule, DxBoxModule, DxRadioGroupModule,
    DxScrollViewModule, DxGalleryModule, DxValidatorModule,
    DxTooltipModule, DxSpeedDialActionModule, DxAccordionModule,
    DxTabPanelModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [HomeComponent, ProfileComponent, TasksComponent]
})
export class AppRoutingModule { }
