import { Component, OnInit } from '@angular/core';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  catego: boolean = false;
  produto: boolean = false;

  constructor(private ToolService: ToolService) {}

  ngOnInit(): void {}

  categoria() {
    if ((this.catego = !this.catego)) {
      this.ToolService.categoria();
    }
    else{
      this.ToolService.principal();
    }
  }
  produtos() {
    if ((this.produto = !this.produto)) {
      this.ToolService.produtos();
    }
    else{
      this.ToolService.principal();
    }
    console.log(this.produto)
  }

  cadastro(){
    this.ToolService.registro();
  }
}
