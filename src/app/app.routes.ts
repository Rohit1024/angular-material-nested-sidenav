import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('@/app/dashboard/dashboard.routes').then(
        (m) => m.dashboard_routes
      ),
  },
];
