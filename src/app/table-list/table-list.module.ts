import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListRoutingModule } from './table-list-routing.module';
import { TableListComponent } from './table-list.component';



@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule,
    TableListRoutingModule,
    MatTableModule,
    MatButtonModule
    
  ]
})
export class TableListModule { }
