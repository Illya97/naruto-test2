import { NgModule } from '@angular/core';
import { ChangeFormShinobiComponent } from './change-form-shinobi.component';
import { ChangeFormShinobiRoutingModule } from './change-form-shinobi-routing.module';



@NgModule({
  declarations: [ChangeFormShinobiComponent],
  imports: [ChangeFormShinobiRoutingModule
  ],
  exports:[ChangeFormShinobiComponent]
})
export class ChangeFormShinobiModule { }
