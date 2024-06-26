import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



export type objetivosEstrategi = {
    id: number;
    objetivoEstrategico: string;
    objetivoOperacional: string;
    causas:string;
    prevencao: string;
    eventRisco: string;
    consequencia: string;
    correcao: string;

  };
@Injectable({
    providedIn: 'root'
})
export class RiscosService {
    apiUrl = 'http://localhost:3000/ObjetivosEstrategicos';
  constructor(private http: HttpClient) { }

  pegarObjetivos(): Observable<objetivosEstrategi[]> {
    return this.http.get<objetivosEstrategi[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }



  criarObjetivos(objetivos : objetivosEstrategi){
    return this.http.post(this.apiUrl, objetivos);
  }
}
