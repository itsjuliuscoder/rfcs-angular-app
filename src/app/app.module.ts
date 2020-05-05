import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './public/about/about.component';
import { IndexComponent } from './public/index/index.component';
import { ContactComponent } from './public/contact/contact.component';
import { ContactContainerComponent } from './public/contact/contact-container/contact-container.component';
import { ContactBannerComponent } from './public/contact/contact-banner/contact-banner.component';
import { BlogComponent } from './public/blog/blog.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { LegalComponent } from './public/legal/legal.component';
import { LoginComponent } from './publisher/login/login.component';
import { RegisterComponent } from './publisher/register/register.component';
import { TermsComponent } from './public/legal/terms/terms.component';
import { PrivacyComponent } from './public/legal/privacy/privacy.component';
import { PrivacyPoliciesComponent } from './public/privacy-policies/privacy-policies.component';
import { AdminComponent } from './admin/admin.component';
import { BlogContainerComponent } from './public/blog/blog-container/blog-container.component';
import { BlogBannerComponent } from './public/blog/blog-banner/blog-banner.component';
import { TermsBannerComponent } from './public/legal/terms/terms-banner/terms-banner.component';
import { TermsContainerComponent } from './public/legal/terms/terms-container/terms-container.component';
import { PrivacyBannerComponent } from './public/legal/privacy/privacy-banner/privacy-banner.component';
import { PrivacyContainerComponent } from './public/legal/privacy/privacy-container/privacy-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './public/blog/blog-details/blog-details.component';
import { PublicComponent } from './public/public.component';
import { SupportComponent } from './public/support/support.component';
import { SupportBannerComponent } from './public/support/support-banner/support-banner.component';
import { SupportContentComponent } from './public/support/support-content/support-content.component';
import { ContentComponent } from './page-not-found/content/content.component';
import { BannerPageNotFoundComponent } from './page-not-found/banner-page-not-found/banner-page-not-found.component';
import { ForgotPasswordComponent } from './publisher/forgot-password/forgot-password.component';
import { PublisherComponent } from './publisher/publisher.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpService } from './http.service';
import { FaqsComponent } from './public/faqs/faqs.component';
import { FaqsBannerComponent } from './public/faqs/faqs-banner/faqs-banner.component';
import { FaqsContentComponent } from './public/faqs/faqs-content/faqs-content.component';
import { PricingBannerComponent } from './public/pricing/pricing-banner/pricing-banner.component';
import { PricingContentComponent } from './public/pricing/pricing-content/pricing-content.component';
import { ConfirmationComponent } from './publisher/confirmation/confirmation.component';
import { ResendComponent } from './publisher/resend/resend.component';
import { ResetPasswordComponent } from './publisher/reset-password/reset-password.component';
import { JwtInterceptor } from './core/interceptors/interceptor.jwt';
import { HomeComponent } from './publisher/home/home.component';
import { ProfileComponent } from './publisher/profile/profile.component';
import { SubjectComponent } from './publisher/subject/subject.component';
import { TopicComponent } from './publisher/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    ContactComponent,
    ContactContainerComponent,
    ContactBannerComponent,
    BlogComponent,
    PricingComponent,
    LegalComponent,
    LoginComponent,
    RegisterComponent,
    TermsComponent,
    PrivacyComponent,
    PrivacyPoliciesComponent,
    AdminComponent,
    BlogContainerComponent,
    BlogBannerComponent,
    TermsBannerComponent,
    TermsContainerComponent,
    PrivacyBannerComponent,
    PrivacyContainerComponent,
    PageNotFoundComponent,
    BlogDetailsComponent,
    PublicComponent,
    SupportComponent,
    SupportBannerComponent,
    SupportContentComponent,
    ContentComponent,
    BannerPageNotFoundComponent,
    ForgotPasswordComponent,
    PublisherComponent,
    WelcomeComponent,
    FaqsComponent,
    FaqsContentComponent,
    FaqsBannerComponent,
    PricingBannerComponent,
    PricingContentComponent,
    ConfirmationComponent,
    ResendComponent,
    ResetPasswordComponent,
    HomeComponent,
    ProfileComponent,
    SubjectComponent,
    TopicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
