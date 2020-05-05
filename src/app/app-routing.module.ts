import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { IndexComponent } from './public/index/index.component';
import { ContactComponent } from './public/contact/contact.component';
import { LegalComponent } from './public/legal/legal.component';
import { BlogComponent } from './public/blog/blog.component';
import { TermsComponent } from './public/legal/terms/terms.component';
import { PrivacyComponent } from './public/legal/privacy/privacy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './public/blog/blog-details/blog-details.component';
import { SupportComponent } from './public/support/support.component';
import { LoginComponent } from './publisher/login/login.component';
import { RegisterComponent } from './publisher/register/register.component';
import { ForgotPasswordComponent } from './publisher/forgot-password/forgot-password.component';
import { FaqsComponent} from './public/faqs/faqs.component';
import { PricingComponent} from './public/pricing/pricing.component';
import { ConfirmationComponent } from './publisher/confirmation/confirmation.component';
import { ResendComponent } from './publisher/resend/resend.component';
import { ResetPasswordComponent } from './publisher/reset-password/reset-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './publisher/home/home.component';
import { SubjectComponent } from './publisher/subject/subject.component';
import { ProfileComponent } from './publisher/profile/profile.component';

const routes: Routes = [

  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: {title : 'About Right Foundation Children School'}},
  { path: 'index', component: IndexComponent, data: {title : 'Thinking Differently - Right Foundation Children School'}},
  { path: 'blog', component: BlogComponent, data: {title : 'Blog - Right Foundation Children School'} },
  { path: 'contact', component: ContactComponent, data: {title : 'Contact Us - Right Foundation Children School'} },
  { path: 'legal', component: LegalComponent, data: {title : 'About Right Foundation Children School'} },
  { path: 'terms', component: TermsComponent, data: {title : 'Terms of Use - Right Foundation Children School'} },
  { path: 'privacy', component: PrivacyComponent, data: {title : 'Privacy Policies - Right Foundation Children School'} },
  { path: 'support', component: SupportComponent, data: {title : 'Support - Right Foundation Children School'}},
  { path: 'blog/:id', component: BlogDetailsComponent, data: {title : 'Blog/ - Right Foundation Children School'}},
  { path: 'login', component: LoginComponent, data: {title : 'Login - Right Foundation Children School'}},
  { path: 'register', component: RegisterComponent, data: {title : 'Get Started with Right Foundation Children School'}},
  { path: 'reset-password', component: ForgotPasswordComponent, data: {title : 'Forgot Password - Right Foundation Children School'}},
  { path: 'faqs', component: FaqsComponent, data: {title : 'FAQs - AfriHow'}},
  { path: 'pricing', component: PricingComponent, data: {title : 'Plans & Pricing - Right Foundation Children School'}},
  { path: 'support', component: SupportComponent, data: {title : 'Support - Right Foundation Children School'}},
  { path: 'resend-email', component: ResendComponent, data: {title : 'Resend Email - Right Foundation Children School'}},
  { path: 'reset-password/:id', component: ResetPasswordComponent, data: {title: 'Reset Password - Right Foundation Children School'} },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {title: 'Welcome to the School Portal - RFCS'} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {title: 'My Profile - RFCS'} },
  { path: 'subject', component: SubjectComponent, canActivate: [AuthGuard], data: {title: 'Subjects - RFCS'} },
  { path: '**', component: PageNotFoundComponent, data: {title : '404 - Page Not Found'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,
                                  IndexComponent,
                                  BlogComponent,
                                  ContactComponent,
                                  LegalComponent,
                                  TermsComponent,
                                  PrivacyComponent,
                                  PageNotFoundComponent,
                                  BlogDetailsComponent,
                                  LoginComponent,
                                  RegisterComponent,
                                  ForgotPasswordComponent,
                                  FaqsComponent,
                                  ConfirmationComponent,
                                  ResendComponent,
                                  ResetPasswordComponent
                                  ];

