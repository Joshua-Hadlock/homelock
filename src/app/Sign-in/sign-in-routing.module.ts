import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signin } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: signin,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInPageRoutingModule {}
