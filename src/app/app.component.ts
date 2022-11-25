import { Component } from '@angular/core';
import { ToolService } from './shared/toolbar/tool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estoqueUi';

  constructor(private ToolService: ToolService) { }

  catego: boolean = this.ToolService.catego;
  produto: boolean = this.ToolService.produto;
}
