import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

const withdrawLimit = (balance:number, action:string, actionAmount: number): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  return (action == "Withdraw" && actionAmount > balance) ? { withdrawLimitExceeded: true } : null;
};

@Component({
  selector: 'app-actions',
  imports: [
    CommonModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule
    
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  constructor(private router: Router) {}
  
  currentBalance : number= 0;

  action : string = "None";
  actionAmount : number = 0.01;
  newBalance : number = 0;

  moneyControl = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0.01), 
    withdrawLimit(this.currentBalance, this.action, this.actionAmount)
  ]);

  ngOnInit(){
    this.currentBalance = this.getBalance()
  }
  
  getBalance(){
    return 100
  }

  calculateNewBalance(){
    const operator = this.action == "Deposit" ? 1 : -1;
    return this.currentBalance + operator * (this.actionAmount || 0);
  }

  logout(){
    this.router.navigate(['/']);
  }

  selectAction(actionChoice:string){
      this.action = actionChoice
  }
}
