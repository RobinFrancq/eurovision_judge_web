import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpClientService {

  constructor(private http: HttpClient) {
    super();
  }

  loginUser(username: string, password: string): Observable<string> {
    const url: string = this.baseUrl + '/login';
    const user: User = {
      username: username,
      password: password
    };
    return this.http.post<string>(url, user);
  }
}
