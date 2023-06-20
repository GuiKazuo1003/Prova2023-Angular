import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/EMPRESA";

  Cadastrar(empresa: Empresa) : Observable<Empresa> {
    return this.http.post<Empresa>(this.url, empresa);
  }

  getEmpresa(): Observable <Empresa[]> {
    return this.http.get<Empresa[]> (this.url)
  }
}
