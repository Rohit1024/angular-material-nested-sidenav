import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { User } from "@/app/shared/models";
import { config } from "@/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    const url = `https://${config.mock_api_key}.mockapi.io/api/users`;

    return this.http.get<User[]>(url);
  }
}
