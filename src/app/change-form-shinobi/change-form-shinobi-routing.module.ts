import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeFormShinobiComponent } from './change-form-shinobi.component';



const routes: Routes = [
  {
    path: 'change-form-shinobi',
    component: ChangeFormShinobiComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ChangeFormShinobiRoutingModule { }
