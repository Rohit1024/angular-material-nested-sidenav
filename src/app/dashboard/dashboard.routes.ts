import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ContentComponent } from "./content/content.component";
import { ImagesComponent } from "./content/images/images.component";
import { VideosComponent } from "./content/videos/videos.component";
import { DocumentsComponent } from "./content/documents/documents.component";

import { SignupComponent } from "./auth/signup/signup.component";
import { AuthLayoutComponent } from "./auth/auth.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { PostsComponent } from "./posts/posts.component";

export const dashboard_routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
    ],
  },
  {
    path: "content",
    component: ContentComponent,
    children: [
      { path: "images", component: ImagesComponent },
      { path: "videos", component: VideosComponent },
      { path: "documents", component: DocumentsComponent },
    ],
  },
];
