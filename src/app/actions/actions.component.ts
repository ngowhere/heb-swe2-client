import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, shareReplay, take, startWith } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Observable, Subject } from 'rxjs';
import { BalanceResponse } from '../interfaces/user.interface';

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
  DAILY_WITHDRAWAL_COUNT_LIMIT = 4
  MAX_WITHDRAWAL_PER_TRANSACTION = 500

  userId$!: Observable<number>;
  balance$!: Observable<BalanceResponse>;
  dailyWithdrawals$!: Observable<any>;

  refresh$ = new Subject<void>();

  action : string = "None";
  actionAmount : number = 0.01;
  newBalance : number = 0;

  moneyControl = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0.01), 
  ]);

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.userId$ = this.route.paramMap.pipe(
      map(pm => Number(pm.get('userId')))
    );

    this.balance$ = this.refresh$.pipe(
      startWith(void 0), // triggers the first load
      switchMap(() =>
        this.userId$.pipe(
          switchMap(id => this.userService.getBalance(id))
        )
      ),
      shareReplay(1)
    );

    this.dailyWithdrawals$ = this.refresh$.pipe(
      startWith(void 0), 
      switchMap(() =>
        this.userId$.pipe(
          switchMap(id => this.userService.dailyWithdrawalCount(id))
        )
      ),
      shareReplay(1)
    );

  }

  calculateNewBalance(balance: string | null): number {
    const numericBalance = typeof balance === 'string' ? parseFloat(balance) : balance ?? 0;
    const amount = this.actionAmount || 0;
    const operator = this.action === 'Deposit' ? 1 : -1;

    return numericBalance + operator * amount;
  }

  submitTransaction() {
    this.userId$.pipe(
      take(1),
      switchMap(userId => {
        const delta = this.action === 'Deposit' ? this.actionAmount : -this.actionAmount;
        return this.userService.updateBalance(userId, delta);
      })
    ).subscribe({
      next: () => {
        alert('Transaction Complete!');
        this.refresh$.next();
      },
      error: err => alert(err.error.detail)
    });
  }

  logout(){
    this.router.navigate(['/']);
  }

  selectAction(actionChoice:string){
      this.action = actionChoice
  }
}
