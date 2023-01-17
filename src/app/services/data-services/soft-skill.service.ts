import { HttpClient, HttpContext, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { SoftSkill } from 'src/app/models/skill.interface';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  baseUrl = 'https://angularjwt-facu20200.koyeb.app/api/softskill';

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.baseUrl, cabecera);
  }

  getSoftSkillById(id: number): Observable<SoftSkill> {
    return this.http.get<SoftSkill>(`${this.baseUrl}/${id}`, cabecera);
  }

  postSoftSkill(data: SoftSkill): Observable<SoftSkill> {
    return this.http
      .post<SoftSkill>(this.baseUrl, data, cabecera)
      .pipe(tap(() => this.Refreshrequired.next()));
  }

  putSoftSkill(data: SoftSkill): Observable<SoftSkill> {
    return this.http
      .put<SoftSkill>(this.baseUrl, data, cabecera)
      .pipe(tap(() => this.Refreshrequired.next()));
  }

  deleteSoftSkill(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/${id}`, cabecera)
      .pipe(tap(() => this.Refreshrequired.next()));
  }
}
