import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prueba } from '../models/pruebas';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private baseEndPoint = 'https://api-conc.herokuapp.com/api/pruebas';
  private headers : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http : HttpClient) {


  }
  public getAll(): Observable<Prueba[]>{
    return this.http.get<Prueba[]>(this.baseEndPoint);
  }

  public getById(id : number): Observable<Prueba>{
    return this.http.get<Prueba>(`${this.baseEndPoint}/${id}`);
  }

  public create(prueba : Prueba) : Observable<Prueba>{
      return this.http.post<Prueba>(this.baseEndPoint,prueba,{headers:this.headers});
  }
  
  public udpate(prueba : Prueba) : Observable<Prueba>{
    return this.http.post<Prueba>(`${this.baseEndPoint}/id/${prueba.id}`,Prueba,{headers:this.headers});
  }

  public delete(id : number): Observable<string>{
    return this.http.delete<string>(`${this.baseEndPoint}/id/${id}`);
  }
}
