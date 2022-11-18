import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaModule } from "./categoria/categoria.module";
import { ProdutosModule } from './produtos/produtos.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        CategoriaModule,
        ProdutosModule,
        SharedModule
    ]
})
export class AppModule { }
