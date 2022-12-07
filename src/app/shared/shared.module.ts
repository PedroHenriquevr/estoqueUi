import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategoriaModule } from '../categoria/categoria.module';
import { ProdutosModule } from '../produtos/produtos.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CategoriaModule,
    ProdutosModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
