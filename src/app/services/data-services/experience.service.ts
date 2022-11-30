import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { DataForm } from '../../models/dataForm.model';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  baseUrl = 'https://angularjwt.angularjwt.koyeb/work';

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getWorks(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(this.baseUrl, cabecera);
  }

  getWorkById(id: number): Observable<DataForm> {
    return this.http.get<DataForm>(`${this.baseUrl}/${id}`, cabecera);
  }

  postWork(data: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putWork(data: DataForm): Observable<DataForm> {
    return this.http.put<DataForm>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteWork(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
