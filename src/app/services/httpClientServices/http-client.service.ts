import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected baseUrl: string = environment.apiBaseUrl;

  constructor() { }
}
