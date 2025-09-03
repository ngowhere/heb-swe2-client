import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userId: number | null = null;
  pin = '';
  loginResult: boolean | null = null;
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  login() {
    if (!this.userId || !this.pin) return;
    this.loading = true;
    this.loginResult = null;

    this.userService.userAuth(this.userId, this.pin).subscribe({
      next: (ok) => {
        this.loading = false;
        this.loginResult = ok;
        this.router.navigate(['/actions', this.userId]);
      },
      error: () => {
        this.loading = false;
        this.loginResult = false;
      }
    });
  }
  
}
