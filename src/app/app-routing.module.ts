import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './public/index/index.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { LoginComponent } from './publisher/login/login.component';
import { HomeComponent } from './publisher/home/home.component';
import { SubjectComponent } from './publisher/subject/subject.component';
import { TopicDetailsComponent } from './publisher/topic-details/topic-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, data: {title : 'Welcome to Right Foundation Children School'}},
  { path: 'about', component: AboutComponent, data: {title : 'About Us - RFCS'}},
  { path: 'contact', component: ContactComponent, data: {title : 'Contact Us - RFCS'} },
  { path: 'login', component: LoginComponent, data: {title : 'Login Now - RFCS'} },
  { path: 'home', component: HomeComponent, data: {title : 'Dashboard - RFCS'} },
  { path: 'subject', component: SubjectComponent, data: {title : 'Subject Dashboard - RFCS'} },
  { path: 'topic', component: TopicDetailsComponent, data: {title : 'Topic Dashboard - RFCS'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
