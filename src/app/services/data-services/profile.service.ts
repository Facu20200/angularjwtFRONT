import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'https://angularjwt-facu20200.koyeb.app/api/profile';

  constructor(private http: HttpClient) {
  }

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseUrl);
  }

  postProfile(data: FormData): Observable<Profile> {
    return this.http.post<Profile>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putProfile(data: FormData): Observable<Profile> {
    return this.http.put<Profile>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

}
