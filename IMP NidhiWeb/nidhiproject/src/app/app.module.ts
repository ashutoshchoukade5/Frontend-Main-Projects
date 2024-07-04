import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { AdvancesComponent } from './pages/advances/advances.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { IntrestComponent } from './pages/intrest/intrest.component';
import { DownloadComponent } from './pages/download/download.component';
import { ContacUSComponent } from './pages/contac-us/contac-us.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { AboutMeassageComponent } from './pages/about/about-meassage/about-meassage.component';
import { AboutDirectorComponent } from './pages/about/about-director/about-director.component';
import { AboutManagementComponent } from './pages/about/about-management/about-management.component';
import { StrengthComponent } from './pages/about/strength/strength.component';
import { AboutGallaryComponent } from './pages/about/about-gallary/about-gallary.component';
import { AboutBankComponent } from './pages/about/about-bank/about-bank.component';
import { CardComponent } from './pages/services/card/card.component';
import { FacilityComponent } from './pages/services/facility/facility.component';
import { NeftComponent } from './pages/services/neft/neft.component';
import { StampComponent } from './pages/services/stamp/stamp.component';
import { AccountComponent } from './pages/services/account/account.component';
import { SmsbankingComponent } from './pages/services/smsbanking/smsbanking.component';
import { MobilebankingComponent } from './pages/services/mobilebanking/mobilebanking.component';
import { VehicalLoanComponent } from './pages/advances/vehical-loan/vehical-loan.component';
import { EducationLoanComponent } from './pages/advances/education-loan/education-loan.component';
import { GoldLoanComponent } from './pages/advances/gold-loan/gold-loan.component';
import { PersonalLoanComponent } from './pages/advances/personal-loan/personal-loan.component';
import { AdvancesLastComponent } from './pages/advances/advances-last/advances-last.component';
import { CurrentAccountComponent } from './pages/deposit/current-account/current-account.component';
import { FixedAccountComponent } from './pages/deposit/fixed-account/fixed-account.component';
import { DepositeIntrestComponent } from './pages/intrest/deposite-intrest/deposite-intrest.component';
import { ServiceChargeComponent } from './pages/intrest/service-charge/service-charge.component';
import { FeedbackComponent } from './pages/contac-us/feedback/feedback.component';
import { RecurringComponent } from './pages/deposit/recurring/recurring.component';

import { DepositecalculaterComponent } from './pages/calculater/depositecalculater/depositecalculater.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AboutComponent,
    ServicesComponent,
    AdvancesComponent,
    DepositComponent,
    IntrestComponent,
    DownloadComponent,
    ContacUSComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeassageComponent,
    AboutDirectorComponent,
    AboutManagementComponent,
    StrengthComponent,
    AboutGallaryComponent,
    AboutBankComponent,
    CardComponent,
    FacilityComponent,
    NeftComponent,
    StampComponent,
    AccountComponent,
    SmsbankingComponent,
    MobilebankingComponent,
    VehicalLoanComponent,
    EducationLoanComponent,
    GoldLoanComponent,
    PersonalLoanComponent,
    AdvancesLastComponent,
    CurrentAccountComponent,
    FixedAccountComponent,
    DepositeIntrestComponent,
    ServiceChargeComponent,
    FeedbackComponent,
    RecurringComponent,

    DepositecalculaterComponent,

    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }












