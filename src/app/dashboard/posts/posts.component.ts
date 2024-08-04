import { Component, OnInit, ViewChild, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { User } from "@/app/shared/models";
import { UsersService } from "@/app/shared/services/users.service";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSort } from "@angular/material/sort";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-table-example",
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    DatePipe,
  ],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>Angular Material Table</mat-card-title>
        <mat-card-subtitle
          >Angular mat-table sorting & pagination example</mat-card-subtitle
        >
      </mat-card-header>
      <mat-card-content style="margin-top: 20px;">
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef>Id.</th>
            <td mat-cell *matCellDef="let user">{{ user.id }}</td>
          </ng-container>

          <ng-container matColumnDef="avatar">
            <th mat-header-cell *matHeaderCellDef>Avatar</th>
            <td mat-cell *matCellDef="let user">
              <img
                [src]="user.avatar"
                width="35"
                height="35"
                style="border-radius: 100%;"
              />
            </td>
          </ng-container>

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let user">{{ user.name }}</td>
          </ng-container>

          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef>Email</th>
            <td mat-cell *matCellDef="let user">{{ user.email }}</td>
          </ng-container>

          <ng-container matColumnDef="dob">
            <th mat-header-cell *matHeaderCellDef>Birth Date</th>
            <td mat-cell *matCellDef="let user">
              {{ user.dob | date: "medium" }}
            </td>
          </ng-container>

          <ng-container matColumnDef="gender">
            <th mat-header-cell *matHeaderCellDef>Gender</th>
            <td mat-cell *matCellDef="let user">{{ user.gender }}</td>
          </ng-container>

          <ng-container matColumnDef="createdAt">
            <th mat-header-cell *matHeaderCellDef>Created At</th>
            <td mat-cell *matCellDef="let user">
              {{ user.createdAt | date: "medium" }}
            </td>
          </ng-container>

          <ng-container matColumnDef="updatedAt">
            <th mat-header-cell *matHeaderCellDef>Updated At</th>
            <td mat-cell *matCellDef="let user">
              {{ user.updatedAt | date: "medium" }}
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let emprow; columns: displayedColumns"></tr>
        </table>
        <mat-paginator
          #paginator
          [pageSizeOptions]="pageSizes"
          showFirstLastButtons
        ></mat-paginator>
      </mat-card-content>
    </mat-card>
  `,
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "avatar",
    "name",
    "email",
    "dob",
    "gender",
    "createdAt",
    "updatedAt",
  ];
  usersData!: User[];

  usersService = inject(UsersService);
  dataSource = new MatTableDataSource<User>();
  pageSizes = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getTableData() {
    return this.usersService.getUsers();
  }

  ngOnInit() {
    this.getTableData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
