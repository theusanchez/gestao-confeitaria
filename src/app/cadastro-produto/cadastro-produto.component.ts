import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})

export class CadastroProdutoComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  produtos = [
    {
      _id: '60e0c23349cda83a929b3530',
      nome: 'Bombom',
      valor: 7,
      qtdMinima: 12,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c2fe49cda83a929b3531',
      nome: 'Cone',
      valor: 20,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c52749cda83a929b3532',
      nome: 'Biscoito',
      valor: 9,
      qtdMinima: 10,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c56c49cda83a929b3533',
      nome: 'Momoreco de oreo',
      valor: 15,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0cccc49cda83a929b353c',
      nome: 'Pirulito',
      valor: 14,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c23349cda83a929b3530',
      nome: 'Bombom',
      valor: 7,
      qtdMinima: 12,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c2fe49cda83a929b3531',
      nome: 'Cone',
      valor: 20,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c52749cda83a929b3532',
      nome: 'Biscoito',
      valor: 9,
      qtdMinima: 10,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0c56c49cda83a929b3533',
      nome: 'Momoreco de oreo',
      valor: 15,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
    {
      _id: '60e0cccc49cda83a929b353c',
      nome: 'Pirulito',
      valor: 14,
      qtdMinima: 6,
      config: [],
      conjunto: [],
    },
  ];
  
  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroProdutoModal, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }
  
  ngOnInit(): void {}
}

interface Bolos {
  value: string;
  viewValue: string;
}

interface IProduto {
  tipoBolo: string;
  tipoProduto: string;
  nome: string;
  valor: number;
  qtdMinima: number;
  linkFotoProduto: string; 
 }

@Component({
  selector: 'cadastro-produto-modal',
  templateUrl: 'cadastro-produto-modal.html',
  styleUrls: ['./cadastro-produto.component.scss']
})

export class CadastroProdutoModal {

  constructor() { }
  submitted = false;

  bolos: Bolos[] = [
    {value: 'naked', viewValue: 'Naked'},
    {value: 'ganache', viewValue: 'Ganache'},
  ];

  produto = {
    
  } as IProduto;

  onSave() {
    this.submitted = true;
    console.log(this.produto);
  }
}
