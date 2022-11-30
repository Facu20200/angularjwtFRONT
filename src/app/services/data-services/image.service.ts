import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl = 'https://angularjwt.angularjwt.koyeb/image';

  constructor(private http: HttpClient) { }

  getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  getImage(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`, cabecera);
  }

  postImage(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data, cabecera);
  }

  deleteImage(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`, cabecera);
  }
}
