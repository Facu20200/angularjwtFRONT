import { HttpClient, HttpContext, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Project } from 'src/app/models/projects.interface';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  baseUrl = 'https://angularjwt.angularjwt.koyeb/project';

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl, cabecera);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`, cabecera);
  }

  postProject(data: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putProject(data: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl, data, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, cabecera)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
