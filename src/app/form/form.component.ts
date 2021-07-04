import { Component, OnInit } from '@angular/core';

interface Item {
  value: string;
  viewValue: string;
}

type TipoEntrega = "Entrega"|"Retirada";
type TipoCaptacao = "Instagram"|"Indicacao";

interface IPedido {
 cliente: {
   contato: string;
   nome: string;
   captacao?: TipoCaptacao;
 }
  tema: string;
 cores: string[];
 observacoes: string;
 entrega: {
   tipo: TipoEntrega;
   data: Date;
   endereco?: string;
   valorFrete?: number;
 },
 valorPedido?: number;

}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  items: Item[] = [
    {value: 'kt-festa-1', viewValue: 'Kit Festa Decore'},
    {value: 'kt-festa-2', viewValue: 'Kit Festa Petit'},
    {value: 'kt-festa-3', viewValue: 'Kit Festa Familia'}
  ];

  constructor() { }
  horario: string = '';
  submitted = false;

  pedido = {
    cliente: {},
    entrega: {
      tipo: "Retirada",
      data: new Date()
    }
  } as IPedido;

  ngOnInit(): void {
  }

  onSave() {
    this.submitted = true;
    console.log(this.pedido);
  }

}
