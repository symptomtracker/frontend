import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageViewComponent } from './landing-page-view/landing-page-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { ProfileBasicViewComponent } from './profile-basic-view/profile-basic-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SymptomBasicViewComponent } from './symptom-basic-view/symptom-basic-view.component';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileContactViewComponent } from "./profile-contact-view/profile-contact-view.component";

const appRoutes: Routes = [
  { path: 'home', component: LandingPageViewComponent },
  { path: 'profilebasic', component: ProfileBasicViewComponent },
  { path: 'profilecontact', component: ProfileContactViewComponent },
  { path: 'symptombasic', component: SymptomBasicViewComponent },
/*  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }, */
  { path: '',
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
