import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-videos",
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>videos works!</p>
    <router-outlet />`,
  styles: ``,
})
export class VideosComponent {}
