import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    loanAmount: number=0;
    tenureYears: number=0;
    rateOfInterest: number=0;
    emi: number=0;
  
    calculateEMI(): void {
      // Implement your EMI calculation logic here
    }
  
    reset(): void {
      // Implement your reset logic here
    }



}


// about.component.ts



