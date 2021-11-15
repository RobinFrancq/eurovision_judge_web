import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpClientService {

  constructor(private http: HttpClient, 
              private toastr: ToastrService,
              private translate: TranslateService) {
    super();
  }

  loginUser(username: string, password: string): Observable<boolean> {
    const url: string = this.baseUrl + '/login';
    const user: User = {
      username: username,
      password: password
    };
    return this.http.post<boolean>(url, user).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(this.translate.instant('exceptionMessage.' + error.error.message), this.translate.instant('oops'))
        return of(false);
      })
    );
  }
}