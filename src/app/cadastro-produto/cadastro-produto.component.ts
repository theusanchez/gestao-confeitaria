import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
