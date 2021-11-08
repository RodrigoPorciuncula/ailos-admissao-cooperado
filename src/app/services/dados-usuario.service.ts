import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
});


@Injectable({
  providedIn: 'root',
})

export class DadosUsuarioService {
  urlApi = 'http://localhost:3000/dadosUsuarioCpf';

  constructor(private http: HttpClient){}

  getDadosUsuario = (): Observable<any> => {
    return this.http.get(this.urlApi, {headers: httpOptions.headers, params: {}});
  }
}
