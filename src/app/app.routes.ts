import { Route, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { appMenuItems, MenuItem } from "./shared/utils/menu-items";
import { AuthLayoutComponent } from "./auth/auth.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";

const itemToRoute = (item: MenuItem): Route => {
  const route: Route = { path: item.route, component: item.component };
  if (item.subItems) {
    route.children = item.subItems.map((sub) => itemToRoute(sub));
  }

  return route;
};

export const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "", redirectTo: "signin", pathMatch: "full" },
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    children: appMenuItems.map((i) => itemToRoute(i)),
  },
];
