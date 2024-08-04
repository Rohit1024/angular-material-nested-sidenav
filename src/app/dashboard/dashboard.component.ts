import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-dashboard",
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Dashboard</mat-card-title>
        <mat-card-subtitle>Manage Cards</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content> </mat-card-content>
    </mat-card>
  `,
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class DashboardComponent {}
