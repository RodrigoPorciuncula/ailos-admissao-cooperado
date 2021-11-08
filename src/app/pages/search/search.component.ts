import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DadosUsuarioService } from 'src/app/services/dados-usuario.service';
import { GenericValidator } from 'src/app/validators/generic-validator';
//import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  cpfValido: boolean = false;
  dadosUsuario: any;
  validacaoCpf: boolean = true;
  desabilitado: boolean = false;
  cpfCopy: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private el: ElementRef,
    private dadosUsuarioService: DadosUsuarioService)
    {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.compose([Validators.required, GenericValidator.isValidCpf()])]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if(this.form.valid) {
      let elemento = document.getElementById('cpf') || new HTMLElement;
      elemento.classList.remove('has-error');
      this.validacaoCpf = true;
      this.dadosUsuarioService.getDadosUsuario().subscribe(
        (response: any) => {
          this.cpfValido = true;
          this.dadosUsuario = response[0];
          this.desabilitado = true;
          this.cpfCopy = this.form.controls['cpf'].value;
        }, (error: any) => {
          this.cpfValido = false;
          // controle de erro
        }
      );
    } else {
      this.cpfValido = false;
      this.validacaoCpf = false;
      let elemento = document.getElementById('cpf') || new HTMLElement;
      elemento.classList.add('has-error');
    }
  }

  verifyButton() {
    this.desabilitado = false;
  }

}