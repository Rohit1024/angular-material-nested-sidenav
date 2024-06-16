import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Contents</mat-card-title>
        <mat-card-subtitle>List Contents</mat-card-subtitle>
      </mat-card-header>
      <mat-card-footer class="card-footer"> 
        <router-outlet/>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `.card-footer {
    padding: 16px;
  }`,
  ],
})
export class ContentComponent {}
