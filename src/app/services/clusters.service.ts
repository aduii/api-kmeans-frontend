import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prueba } from '../models/pruebas';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {
  private baseEndPoint = 'https://api-conc.herokuapp.com/api/clusters';
  private headers : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http : HttpClient) { 
    
  }
  public getById(id : number): Observable<Prueba[]>{
    return this.http.get<Prueba[]>(`${this.baseEndPoint}/${id}`);
  }
}
