import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-prova-angular',
  templateUrl: './prova-angular.component.html',
  styleUrls: ['./prova-angular.component.css']
})
export class ProvaAngularComponent implements OnInit{

  empresa : Empresa[] = []
  formGroupEmpresa : FormGroup;

  constructor (private empresaService: EmpresaService, private formBuilder: FormBuilder ) {
    this.formGroupEmpresa = this.formBuilder.group(
      {
        id: [],
        nome: [],
        categoria: [],
        cnpj: [],
        porte: [],
        empregados: []
      }
    );
  }
  ngOnInit(): void {
    this.loadEmpresa();
  }
  Cadastrar() {
    this.empresaService.Cadastrar(this.formGroupEmpresa.value).subscribe(
      {
        next : data => {
          this.empresa.push(data);
          this.formGroupEmpresa.reset();
        }
      }
    )
  }
  loadEmpresa() {
    this.empresaService.getEmpresa().subscribe(
      {
        next: data => this.empresa = data,
        error: msg => console.log("Erro ao chamar o endpoint" + msg)
      }
    )
  }
}
