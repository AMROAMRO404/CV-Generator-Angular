import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { FirstPartComponent } from './landing-page/first-part/first-part.component';
import { SecondPartComponent } from './landing-page/second-part/second-part.component';
import { FormComponent } from './form/form.component';
import { ResumeComponent } from './resume/resume.component';
import { CvHeaderComponent } from './resume/cv-header/cv-header.component';
import { ObjectiveComponent } from './resume/objective/objective.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { CertificationCoursesComponent } from './resume/certification-courses/certification-courses.component';
import { ReferencesComponent } from './resume/references/references.component';
import { NameComponent } from './resume/cv-header/name/name.component';
import { AddressPhoneComponent } from './resume/cv-header/address-phone/address-phone.component';
import { LinksComponent } from './resume/cv-header/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FirstPartComponent,
    SecondPartComponent,
    FormComponent,
    ResumeComponent,
    CvHeaderComponent,
    ObjectiveComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    CertificationCoursesComponent,
    ReferencesComponent,
    NameComponent,
    AddressPhoneComponent,
    LinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
