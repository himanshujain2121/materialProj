import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'register', component: RegistrationComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
