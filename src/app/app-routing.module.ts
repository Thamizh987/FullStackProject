import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './create-record/create-record.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { BookListComponent } from './book-list/book-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ContactMessageComponent } from './contact-message/contact-message.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'libraryRecords', component: BookListComponent, canActivate: [AuthGaurdService] },
  { path: 'create-record', component: CreateRecordComponent, canActivate: [AuthGaurdService] },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'update-record/:bookId', component: UpdateRecordComponent, canActivate: [AuthGaurdService] },
  { path: 'book-details/:bookId', component: BookDetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'log-in', component: LogInComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile-card', component: ProfileCardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGaurdService] },
  { path: 'thank-you', component: ThankYouComponent, canActivate: [AuthGaurdService] },
  { path: 'contact-message', component: ContactMessageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
