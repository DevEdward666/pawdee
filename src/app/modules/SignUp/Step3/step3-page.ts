import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'step3-page',
  templateUrl: 'step3-page.html',
})
export class Step3Page {

  constructor(
      private routes:Router,
    
  ) {}
   async OnClickLogin(){
        this.routes.navigate(['main-tabs']);
    }

}
