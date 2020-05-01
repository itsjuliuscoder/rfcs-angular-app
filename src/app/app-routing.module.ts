import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './public/index/index.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, data: {title : 'Welcome to Right Foundation Children School'}},
  { path: 'about', component: AboutComponent, data: {title : 'About Us - RFCS'}},
  { path: 'contact', component: ContactComponent, data: {title : 'Contact Us - RFCS'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
