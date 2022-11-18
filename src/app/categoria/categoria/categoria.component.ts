import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  Categorias: Categoria[] = [
    {id: 1, categoria: 'Eletrodomésticos'},
    {id: 2, categoria: 'Brinquedos'},
    {id: 3, categoria: 'Bicicletas'},
    {id: 4, categoria: 'Utensílios'}
  ];
  displayedColumns: string[] = ['id', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
