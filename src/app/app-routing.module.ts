import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./table-list/table-list.module').then((m) => m.TableListModule),
  },

  {
    path: 'table-module',
    loadChildren: () =>
      import('./table-list/table-list.module').then((m) => m.TableListModule),
  },
  {
    path: 'form-module',
    loadChildren: () =>
      import('./form-new-shinobi/form-new-shinobi.module').then(
        (m) => m.FormNewShinobiModule
      ),
  },
  {
    path: 'change-module',
    loadChildren: () =>
      import('./change-form-shinobi/change-form-shinobi.module').then(
        (m) => m.ChangeFormShinobiModule
      ),
  },
];

// const routes: Routes =[
//   { path: '', component: TabsListComponent},
//   { path: 'table', component: TabsListComponent},
//   { path: 'form', component: FormNewShinobiComponent},

//   { path: '**', redirectTo: ''},
//   // {
//   //   path: '',
//   //   redirectTo: '',
//   //   pathMatch: 'full'
//   // }
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
