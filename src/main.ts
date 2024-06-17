import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { App } from "./app.component";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideHotToastConfig } from "@ngxpert/hot-toast";
import { provideHttpClient, withFetch } from "@angular/common/http";

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHotToastConfig(),
    provideHttpClient(withFetch()),
    provideExperimentalZonelessChangeDetection(),
  ],
});
