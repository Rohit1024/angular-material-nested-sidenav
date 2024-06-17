import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatCardModule, MatTabsModule, RouterModule, MatIconModule],
  template: `
    <div class="container">
      <mat-card appearance="outlined">
      <mat-card-header style="display: flex; justify-content: center;">
      <mat-card-title> Get Started </mat-card-title>
    </mat-card-header>
        <mat-card-content style="margin-top: 20px;">
          <nav
            style="margin: 10px 0px;"
            mat-tab-nav-bar
            mat-stretch-tabs
            [tabPanel]="tabPanel"
          >
            @for (link of authTabs; track link) {
            <a
              mat-tab-link
              [routerLink]="link.route"
              routerLinkActive
              #rla="routerLinkActive"
              [active]="rla.isActive"
            >
              <mat-icon>{{ link.icon }}</mat-icon>
              <span style="margin-left: 8px;">{{ link.label }}</span>
            </a>
            }
          </nav>
          <mat-tab-nav-panel #tabPanel> <router-outlet /></mat-tab-nav-panel>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      mat-card {
        width: 600px;
        min-width: 400px;
        border-radius: 20px;
        margin: auto;
      }

      .container {
        height: calc(100dvh - 64px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AuthLayoutComponent {
  authTabs = [
    {
      icon: 'login',
      label: 'Sign In',
      route: 'signin',
    },
    {
      icon: 'person_add',
      label: 'Sign Up',
      route: 'signup',
    },
  ];
}
