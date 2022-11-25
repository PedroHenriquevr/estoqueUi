import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategoriaModule } from '../categoria/categoria.module';
import { ProdutosModule } from '../produtos/produtos.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CategoriaModule,
    ProdutosModule,
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
