import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { IndexComponent } from './public/index/index.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './publisher/register/register.component';
import { LoginComponent } from './publisher/login/login.component';
import { HomeComponent } from './publisher/home/home.component';
import { ProfileComponent } from './publisher/profile/profile.component';
import { SubjectComponent } from './publisher/subject/subject.component';
import { TopicsComponent } from './publisher/topics/topics.component';
import { TopicDetailsComponent } from './publisher/topic-details/topic-details.component';
import { SubjectDetailsComponent } from './publisher/subject-details/subject-details.component';
import { AuthService } from './auth.service';
import { AlertComponent } from './alert/alert.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SubjectComponent,
    TopicsComponent,
    TopicDetailsComponent,
    SubjectDetailsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent],

})
export class AppModule { }
