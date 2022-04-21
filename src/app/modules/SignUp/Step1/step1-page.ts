import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'step1-page',
  templateUrl: 'step1-page.html',
})
export class Step1Page {

  constructor(
      private routes:Router,
    
  ) {}
   async OnClickLogin(){
        this.routes.navigate(['main-tabs']);
    }
}
