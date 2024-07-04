import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdvancesComponent } from './pages/advances/advances.component';
import { ServicesComponent } from './pages/services/services.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { IntrestComponent } from './pages/intrest/intrest.component';
import { ContacUSComponent } from './pages/contac-us/contac-us.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { DownloadComponent } from './pages/download/download.component';
import { AboutMeassageComponent } from './pages/about/about-meassage/about-meassage.component';
import { AboutDirectorComponent } from './pages/about/about-director/about-director.component';
import { AboutBankComponent } from './pages/about/about-bank/about-bank.component';
import { AboutGallaryComponent } from './pages/about/about-gallary/about-gallary.component';
import { AboutManagementComponent } from './pages/about/about-management/about-management.component';
import { StrengthComponent } from './pages/about/strength/strength.component';
import { CardComponent } from './pages/services/card/card.component';
import { FacilityComponent } from './pages/services/facility/facility.component';
import { NeftComponent } from './pages/services/neft/neft.component';
import { StampComponent } from './pages/services/stamp/stamp.component';
import { SmsbankingComponent } from './pages/services/smsbanking/smsbanking.component';
import { MobilebankingComponent } from './pages/services/mobilebanking/mobilebanking.component';
import { VehicalLoanComponent } from './pages/advances/vehical-loan/vehical-loan.component';
import { EducationLoanComponent } from './pages/advances/education-loan/education-loan.component';
import { GoldLoanComponent } from './pages/advances/gold-loan/gold-loan.component';
import { PersonalLoanComponent } from './pages/advances/personal-loan/personal-loan.component';
import { CurrentAccountComponent } from './pages/deposit/current-account/current-account.component';
import { FixedAccountComponent } from './pages/deposit/fixed-account/fixed-account.component';
import { RecurringComponent } from './pages/deposit/recurring/recurring.component';
import { DepositeIntrestComponent } from './pages/intrest/deposite-intrest/deposite-intrest.component';
import { ServiceChargeComponent } from './pages/intrest/service-charge/service-charge.component';



const routes: Routes = [{path:'landing',component:LandingpageComponent},
  {path:'about',component:AboutComponent},{path:'advances',component:AdvancesComponent},{path:'services',component:ServicesComponent},{path:'deposit',component:DepositComponent},{path:'intrest',component:IntrestComponent},
  {path:'contactUS',component:ContacUSComponent},{path:'download',component:DownloadComponent},
  {path:'message',component:AboutMeassageComponent},{path:'director',component:AboutDirectorComponent},{path:'bank',component:AboutBankComponent}, {path:'gallary',component:AboutGallaryComponent},{path:'management',component:AboutManagementComponent},{path:'strength',component:StrengthComponent},
  {path:'card',component:CardComponent},{path:'facility',component:FacilityComponent},{path:'neft',component:NeftComponent},{path:'stamp',component:StampComponent},{path:'smsbanking',component:SmsbankingComponent},{path:'mobile',component:MobilebankingComponent},
  {path:'vehicle',component:VehicalLoanComponent},{path:'education',component:EducationLoanComponent},{path:'gold',component:GoldLoanComponent},{path:'personal',component:PersonalLoanComponent},
  {path:'current',component:CurrentAccountComponent},{path:'fixed',component:FixedAccountComponent},{path:'recurring',component:RecurringComponent},{path:'depositintrest',component:DepositeIntrestComponent},{path:'servicecharge',component:ServiceChargeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
