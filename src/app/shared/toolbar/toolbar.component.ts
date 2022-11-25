import { Component, OnInit } from '@angular/core';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private ToolService : ToolService) {
   }

  ngOnInit(): void {
  }


  categoria(){
    this.ToolService.categoria();
  }
  produtos(){
    this.ToolService.produtos();
  }


}
