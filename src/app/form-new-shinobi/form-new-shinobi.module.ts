import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormNewShinobiComponent } from './form-new-shinobi.component';
import { FormNewShinobiRoutingModule } from './form-new-shinobi-routing.module';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    FormNewShinobiRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
  ],
  declarations: [FormNewShinobiComponent],
  exports: [FormNewShinobiComponent],
})
export class FormNewShinobiModule {}
