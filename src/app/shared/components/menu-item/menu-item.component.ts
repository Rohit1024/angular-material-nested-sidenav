import { Component, computed, input, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MenuItem } from "@/app/shared/utils/menu-items";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [RouterModule, MatIconModule, MatListModule],
  template: `
    <a
      mat-list-item
      [routerLink]="routeHistory() + '/' + item().route"
      #link="routerLinkActive"
      routerLinkActive
      [activated]="link.isActive"
      style="margin-bottom: 5px;"
      (click)="toggleNested()"
      [style.--mat-list-list-item-leading-icon-start-space]="indentation()"
    >
      <mat-icon
        matListItemIcon
        [fontSet]="link.isActive ? 'material-icons' : 'material-icons-outlined'"
        >{{ item().icon }}</mat-icon
      >
      <span matListItemTitle>{{ item().label }}</span>

      @if (item().subItems) {
        <span matListItemMeta style="margin-top: 5px;">
          @if (nestedMenuOpen()) {
            <mat-icon>expand_less</mat-icon>
          } @else {
            <mat-icon>expand_more</mat-icon>
          }
        </span>
      }
    </a>

    @if (item().subItems && nestedMenuOpen()) {
      @for (subItem of item().subItems; track subItem.label) {
        <app-menu-item
          [item]="subItem"
          [routeHistory]="routeHistory() + '/' + item().route"
        />
      }
    }
  `,
})
export class MenuItemComponent {
  item = input.required<MenuItem>();
  routeHistory = input("");
  nestedMenuOpen = signal(false);

  level = computed(() => this.routeHistory().split("/").length - 1);

  indentation = computed(() => `${16 + this.level() * 16}px`);

  toggleNested() {
    if (!this.item().subItems) return;

    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
