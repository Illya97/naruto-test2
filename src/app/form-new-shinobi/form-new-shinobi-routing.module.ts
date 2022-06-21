import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormNewShinobiComponent } from './form-new-shinobi.component';

const routes: Routes = [
  {
    path: 'form-new-shinobi',
    component: FormNewShinobiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormNewShinobiRoutingModule {}
