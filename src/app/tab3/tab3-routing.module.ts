import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  { path: 'detail/:pokename', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule { }