import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./sign-up/sign-up.module').then(c => c.SignUpModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
