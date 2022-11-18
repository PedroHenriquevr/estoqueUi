import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  Categorias: Categoria[] = [
    {id: 1, categoria: 'Pedro'},
    {id: 2, categoria: 'Arthur'},
    {id: 3, categoria: 'Luiz Felipe'},
    {id: 4, categoria: 'Victor'}
  ];
  displayedColumns: string[] = ['id', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
