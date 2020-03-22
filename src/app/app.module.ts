import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { ProfileBasicViewComponent } from './profile-basic-view/profile-basic-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SymptomBasicViewComponent } from './symptom-basic-view/symptom-basic-view.component';
import { RouterModule, Routes } from "@angular/router";
import { ProfileContactViewComponent } from "./profile-contact-view/profile-contact-view.component";
import { PrivacyStatementViewComponent } from './privacy-statement-view/privacy-statement-view.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CodeInputViewComponent } from './code-input-view/code-input-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SymptomQuestionComponent } from './symptom-question/symptom-question.component';
import { MyDataViewComponent } from './my-data-view/my-data-view.component';
import { PatientDataViewComponent } from './patient-data-view/patient-data-view.component';
import { HealthOfficeViewComponent } from './health-office-view/health-office-view.component';
import { SymptomsDailyViewComponent } from './symptoms-daily-view/symptoms-daily-view.component';
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [
  {
    path: 'home',
    component: LandingPageViewComponent,
    data: { title: 'SymptomTracker' }
  },
  { path: 'profilebasic', component: ProfileBasicViewComponent },
  { path: 'profilecontact', component: ProfileContactViewComponent },
  { path: 'symptombasic', component: SymptomBasicViewComponent },
  { path: 'codeinput', component: CodeInputViewComponent },
  { path: 'impressum', component: LegalNoticeComponent },
  { path: 'datenschutzerklärung', component: PrivacyStatementViewComponent },
  { path: 'meinedaten', component: MyDataViewComponent },
  { path: 'patientdata', component: PatientDataViewComponent },
  { path: 'overviewpatients', component: HealthOfficeViewComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageViewComponent,
    ProfileBasicViewComponent,
    ProfileContactViewComponent,
    ToolbarComponent,
    SymptomBasicViewComponent,
    PageNotFoundComponent,
    PrivacyStatementViewComponent,
    LegalNoticeComponent,
    CodeInputViewComponent,
    DashboardViewComponent,
    SymptomQuestionComponent,
    MyDataViewComponent,
    PatientDataViewComponent,
    HealthOfficeViewComponent,
    SymptomsDailyViewComponent,
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
