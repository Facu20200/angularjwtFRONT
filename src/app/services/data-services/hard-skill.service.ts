import { HttpClient, HttpContext, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HardSkill } from 'src/app/models/skill.interface';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class HardSkillService {
  baseUrl = 'https://angularjwt-facu20200.koyeb.app/api/hardskill';

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getHardSkills(): Observable<HardSkill[]> {
    return this.http.get<HardSkill[]>(this.baseUrl, cabecera);
  }

  getHardSkillById(id: number): Observable<HardSkill> {
    return this.http.get<HardSkill>(`${this.baseUrl}/${id}`, cabecera);
  }

  postHardSkill(data: HardSkill): Observable<HardSkill> {
    return this.http.post<HardSkill>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putHardSkill(data: HardSkill): Observable<HardSkill> {
    return this.http.put<HardSkill>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteHardSkill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
