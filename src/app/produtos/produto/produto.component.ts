import { Produto } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  Produtos: Produto[] = [
    {idPro: 1, produto: 'Geladeira'},
    {idPro: 2, produto: 'Cubo Magico'},
    {idPro: 3, produto: 'Bicicletas'},
    {idPro: 4, produto: 'Faca'}
  ];
  displayedColumns: string[] = ['id', 'categoria'];
  constructor() { }

  ngOnInit(): void {
  }

}
