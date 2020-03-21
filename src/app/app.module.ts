import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AlertModule} from 'ngx-bootstrap';
import { ProfileBasicViewComponent } from './profile-basic-view/profile-basic-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SymptomBasicViewComponent } from './symptom-basic-view/symptom-basic-view.component';
import { PrivacyStatementViewComponent } from './privacy-statement-view/privacy-statement-view.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageViewComponent,
    ProfileBasicViewComponent,
    ToolbarComponent,
    SymptomBasicViewComponent,
    PrivacyStatementViewComponent,
    LegalNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
