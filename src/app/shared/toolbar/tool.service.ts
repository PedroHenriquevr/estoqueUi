import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  catego: boolean = false;
  produto: boolean = false;


  constructor( private router: Router ) {}

  categoria() {
    this.router.navigate(['/categoria']);
  }
  produtos() {
    this.router.navigate(['/produto']);
  }
  principal(){
    this.router.navigate(['/'])
  }
  registro(){
    this.router.navigate(['/cadastro'])
  }


}
