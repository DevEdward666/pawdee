import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './modules/Login/login.ui';
import { SignUpPage } from './modules/SignUp/signup.page';
import { TabsPage } from './main/tabs/tabs.page';
const routes: Routes = [
  {
    path: '',component:LoginPage
   
  },
  {
    path: 'main-tabs',component:TabsPage
  },
  {
    path: 'signup-page',component:SignUpPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
