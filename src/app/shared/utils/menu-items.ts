import { ContentComponent } from "@/app/dashboard/content/content.component";
import { DocumentsComponent } from "@/app/dashboard/content/documents/documents.component";
import { ImagesComponent } from "@/app/dashboard/content/images/images.component";
import { LongFormComponent } from "@/app/dashboard/content/videos/long-form/long-form.component";
import { MoviesComponent } from "@/app/dashboard/content/videos/movies/movies.component";
import { ShortsComponent } from "@/app/dashboard/content/videos/shorts/shorts.component";
import { VideosComponent } from "@/app/dashboard/content/videos/videos.component";
import { DashboardComponent } from "@/app/dashboard/dashboard.component";
import { PostsComponent } from "@/app/dashboard/posts/posts.component";
import { Type } from "@angular/core";

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
  subItems?: MenuItem[];
  component?: Type<unknown>;
};

export const appMenuItems: MenuItem[] = [
  {
    icon: "dashboard",
    label: "Dashboard",
    route: "dashboard",
    component: DashboardComponent,
  },
  {
    icon: "description",
    label: "Posts",
    route: "posts",
    component: PostsComponent,
  },
  {
    icon: "video_library",
    label: "Content",
    route: "content",
    component: ContentComponent,
    subItems: [
      {
        icon: "smart_display",
        label: "Videos",
        route: "videos",
        component: VideosComponent,
        subItems: [
          {
            icon: "play_circle",
            label: "Shorts",
            route: "shorts",
            component: ShortsComponent,
          },
          {
            icon: "movie",
            label: "Movie",
            route: "movie",
            component: MoviesComponent,
          },
          {
            icon: "videocam",
            label: "Long Form",
            route: "long-form",
            component: LongFormComponent,
          },
        ],
      },
      {
        icon: "imagesmode",
        label: "Images",
        route: "images",
        component: ImagesComponent,
      },
      {
        icon: "article",
        label: "Documents",
        route: "documents",
        component: DocumentsComponent,
      },
    ],
  },
];
