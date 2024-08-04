import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable, map, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResponsiveService {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  sidebarSelectorMode = toSignal(this.isHandset$);
}
