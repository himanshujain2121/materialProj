import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { GoodsComponent } from './component/form/goods/goods.component';
import { LoginFormComponent } from './component/login-form/login-form.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'register', component: RegistrationComponent },
      { path: 'goodsForm', component: GoodsComponent },
      { path: 'loginForm', component: LoginFormComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
