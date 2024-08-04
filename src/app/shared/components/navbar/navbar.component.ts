import { Component, Renderer2, inject, model, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink],
  template: `
    <div class="gapping">
      <button
        type="button"
        aria-label="Toggle sidenav"
        mat-icon-button
        (click)="toggleSidenav.set(!toggleSidenav())"
      >
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <span style="margin-left: 10px;">Angular Material Nested Sidenav</span>
    </div>
    <div class="gapping">
      <button mat-button style="margin-right: 10px;" (click)="toggle()">
        @if (isDarkMode()) {
          <mat-icon>dark_mode</mat-icon>
        } @else {
          <mat-icon>light_mode</mat-icon>
        }
        Theme
      </button>
      <a mat-raised-button routerLink="/signin">
        <span>Sign in</span>
        <mat-icon>login</mat-icon>
      </a>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .gapping {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class NavbarComponent {
  router = inject(Router);
  toggleSidenav = model<boolean>();

  isDarkMode = signal<boolean>(false);

  private renderer = inject(Renderer2);

  toggle() {
    if (this.isDarkMode()) {
      this.renderer.removeClass(document.body, "darkMode");
    } else {
      this.renderer.addClass(document.body, "darkMode");
    }

    this.isDarkMode.update((isEnabled) => !isEnabled);
  }
}
