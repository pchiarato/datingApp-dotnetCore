import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ValueService {
  constructor(private _http: HttpClient) {}
  getValues() {
    return this._http.get<Array<any>>(`${environment.serverBaseUrl}/api/values`);
  }
}
