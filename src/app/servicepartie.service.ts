import { Injectable } from '@angular/core';
import { Partie } from './partie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicepartieService {

  urlPartie: string = 'http://localhost:3000/DB';

  constructor(private http: HttpClient) {}

  getallPartie(): Observable<Partie[]> {
    return this.http.get<Partie[]>(this.urlPartie);
  }
  getPartie(id: any): Observable<Partie> {
    return this.http.get<Partie>(`${this.urlPartie}/${id}`);
  }
  deletePartie(id: any): Observable<Partie> {
    return this.http.delete<Partie>(`${this.urlPartie}/${id}`);
  }
}
