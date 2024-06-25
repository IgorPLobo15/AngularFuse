import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


export type objetivosEstrategi = {
    id: number;
    objetivoEstrategico: string;
  };
@Injectable({
    providedIn: 'root'
})
export class RiscosService {
    apiUrl = 'http://localhost:3000/ObjetivosEstrategicos';
  apiUrlCadastrar='http://localhost:3000/ObjetivosEstrategicos/cadastrar'
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
    return this.http.post(this.apiUrlCadastrar, objetivos);
  }
}
