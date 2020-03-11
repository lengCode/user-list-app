import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  usersUrl: string = "assets/";
  limitedUrl: string = "?_limit=5";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}/users/users.json`);
  }
}
