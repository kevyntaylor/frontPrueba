import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:8080/empleados';

  constructor(private http: HttpClient) {}

  getEmpleados(id?: number): Observable<any> {
    let url = `${this.baseUrl}`;
    if (id) {
      url = `${this.baseUrl}/${id}`;
    }
    return this.http.get(url);
  }
}
