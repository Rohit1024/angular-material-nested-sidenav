import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { match } from '@/app/shared/validators';

@Component({
  selector: 'auth-signup',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="outline">
        <mat-label>Display Name</mat-label>
        <input
          matInput
          placeholder="Display Name"
          required
          type="text"
          name="name"
          [formControl]="signupForm.controls.displayName"
        />
        <mat-icon matSuffix>account_box</mat-icon>
        @if(handleErrorRegister('displayName', 'required')){
        <mat-error><small>Display Name is required</small></mat-error>
        } @if(handleErrorRegister('displayName', 'minlength')) {
        <mat-error
          ><small
            >Display Name must be of length atleast 3 characters long</small
          ></mat-error
        >
        }
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Email</mat-label>
        <input
          matInput
          placeholder="Email"
          required
          name="email"
          [formControl]="signupForm.controls.email"
        />
        <mat-icon matSuffix>email</mat-icon>
        @if(handleErrorRegister('email', 'required')){
        <mat-error><small>Email is required</small></mat-error>
        } @if(handleErrorRegister('email', 'email')){
        <mat-error><small>Email should be of Valid Format</small></mat-error>
        }
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input
          matInput
          placeholder="Password"
          [type]="passwordHide ? 'password' : 'text'"
          required
          minlength="6"
          name="password"
          [formControl]="signupForm.controls.password"
        />
        <button
          mat-icon-button
          matSuffix
          type="button"
          (click)="passwordHide = !passwordHide"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="passwordHide"
        >
          @if(passwordHide){
          <mat-icon matSuffix>visibility_off</mat-icon>
          } @else{
          <mat-icon matSuffix>visibility</mat-icon>
          }
        </button>
        @if(handleErrorRegister('password', 'required')){
        <mat-error><small>Password is required</small></mat-error>
        } @if(handleErrorRegister('password', 'minlength')){
        <mat-error><small>Password must be of length 6</small></mat-error
        >}
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Confirm Password</mat-label>
        <input
          matInput
          placeholder="Confirm Password"
          [type]="confirmPasswordHide ? 'password' : 'text'"
          required
          name="repassword"
          [formControl]="signupForm.controls.confirmPassword"
        />
        <button
          mat-icon-button
          matSuffix
          type="button"
          (click)="confirmPasswordHide = !confirmPasswordHide"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="confirmPasswordHide"
        >
          @if(confirmPasswordHide){
          <mat-icon matSuffix>visibility_off</mat-icon>
          } @else{
          <mat-icon matSuffix>visibility</mat-icon>
          }
        </button>
        @if(handleErrorRegister('confirmPassword', 'required')){
        <mat-error><small>Confirm Password is required</small></mat-error>
        } @if(handleErrorRegister('confirmPassword', 'matching')){
        <mat-error><small>Passwords should match</small></mat-error>
        }
      </mat-form-field>
      <button mat-fab extended type="submit" style="width : 100%;">
        <mat-icon>person_add</mat-icon>Create Account
      </button>
    </form>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }

      form {
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
  ],
})
export class SignupComponent {
  fb = inject(NonNullableFormBuilder);
  toast = inject(HotToastService);
  router = inject(Router);

  passwordHide = true;
  confirmPasswordHide = true;

  signupForm = this.fb.group(
    {
      displayName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: match('password', 'confirmPassword'),
    }
  );

  onSubmit() {
    this.signupForm.markAllAsTouched();
    const { displayName, email, password } = this.signupForm.value;
    if (!this.signupForm.valid || !displayName || !email || !password)
      return this.toast.error('Form has some errors');
    console.table(this.signupForm.value);
    return this.toast.success('Account Created Successfully');
  }

  /* Get errors */
  public handleErrorRegister(controlName: string, errorName: string) {
    return (
      this.signupForm.get(controlName)?.touched &&
      this.signupForm.get(controlName)?.errors &&
      this.signupForm.get(controlName)?.hasError(errorName)
    );
  }
}
