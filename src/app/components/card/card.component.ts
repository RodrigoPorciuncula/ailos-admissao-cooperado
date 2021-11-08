import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  nomeUsuario: String = '';

  @Input()
  contaAplicacao: String = '';

  @Input()
  contaCorrente: String = '';

  @Input()
  situacaoCpf: String = '';

  longText = "TESTE";

  constructor() { }

  ngOnInit(): void {
  }

}
