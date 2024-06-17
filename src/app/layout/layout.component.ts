import { Component, computed, inject, signal } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "@/app/shared/components/navbar/navbar.component";
import { ResponsiveService } from "@/app/shared/services/responsive.service";
import { MenuItem } from "@/app/shared/models";
import { MatListModule } from "@angular/material/list";
import { MenuItemComponent } from "@/app/shared/components/menu-item/menu-item.component";

@Component({
  selector: "app-layout",
  standalone: true,
  styleUrl: "./layout.component.scss",
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    NavbarComponent,
    RouterOutlet,
    MatListModule,
    MenuItemComponent,
  ],
  template: `
    <mat-toolbar color="accent">
      <app-navbar [(toggleSidenav)]="isOpened" />
    </mat-toolbar>
    <mat-sidenav-container [hasBackdrop]="true">
      <mat-sidenav
        class="sidenav"
        fixedInViewport
        fixedTopGap="56"
        [mode]="modeSelector()"
        [(opened)]="isOpened"
      >
        <mat-nav-list>
          @for (item of sidebarItems; track $index) {
          <app-menu-item [item]="item" />
          }
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="sidenav-scroll-wrapper sidenav-content">
          <router-outlet />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class LayoutComponent {
  private responsiveService = inject(ResponsiveService);
  isOpened = signal(false);
  isThemeSelectorOpen = signal(false);

  modeSelector = computed(() =>
    this.responsiveService.sidebarSelectorMode() ? "over" : "side"
  );

  sidebarItems: MenuItem[] = [
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: "description",
      label: "Posts",
      route: "/posts",
    },
    {
      icon: "video_library",
      label: "Content",
      route: "/content",
      subItems: [
        { icon: "smart_display", label: "Videos", route: "videos" },
        { icon: "imagesmode", label: "Images", route: "images" },
        { icon: "article", label: "Documents", route: "documents" },
      ],
    },
    { icon: "login", label: "Signin", route: "auth/signin" },
    { icon: "person_add", label: "Signup", route: "auth/signup" },
  ];
}
