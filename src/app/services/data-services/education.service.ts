import { HttpClient, HttpContext, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { DataForm } from 'src/app/models/dataForm.model';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseUrl = 'https://angularjwt-facu20200.koyeb.app/api/education';

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getEducation(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(this.baseUrl, cabecera);
  }

  getEducationById(id: number): Observable<DataForm> {
    return this.http.get<DataForm>(`${this.baseUrl}/${id}`, cabecera);
  }

  postEducation(data: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putEducation(data: DataForm): Observable<DataForm> {
    return this.http.put<DataForm>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
