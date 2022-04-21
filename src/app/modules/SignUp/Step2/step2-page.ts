import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'step2-page',
  templateUrl: 'step2-page.html',
})
export class Step2Page {

  constructor(
      private routes:Router,
    
  ) {}
   async OnClickLogin(){
        this.routes.navigate(['main-tabs']);
    }

}
