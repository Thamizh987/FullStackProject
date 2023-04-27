import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ContactMessageComponent } from './contact-message/contact-message.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecordComponent,
    UpdateRecordComponent,
    BookListComponent,
    BookDetailsComponent,
    LogInComponent,
    LogoutComponent,
    SignUpComponent,
    WelcomeComponent,
    ProfileCardComponent,
    ContactUsComponent,
    FeedbackComponent,
    ThankYouComponent,
    ContactMessageComponent,
    ServicesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/* From main.ts,it comes to AppModule.Here it is given the number of components we used and 
the modules used. It then checks for any constructor present in the components and the precedence goes to the
constructor first.Then it goes to the AppComponent which is the head of all of the components present.*/
export class AppModule { }
