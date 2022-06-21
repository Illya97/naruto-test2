import { last } from 'rxjs/operators';
import { Component, OnInit, Output } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  position: number;
  Village: string;
  status: string;
  Actions: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Itachi Uchiha',
    Village: 'Village Hidden by Tree Leaves',
    status: 'reject',
    Actions: '',
  },
  {
    position: 2,
    Name: 'Nagato',
    Village: 'Village Hidden by Rain',
    status: 'accept',
    Actions: '',
  },
];

@Component({
  selector: 'table-list-component',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  ngOnInit() {
    if (localStorage['formArray']) {
      const formArray = JSON.parse(localStorage['formArray']);

      for (let index = 0; index < formArray.length; index++) {
        const objectlikeELEMENT_DATE = {
          position: ELEMENT_DATA[ELEMENT_DATA.length - 1].position + 1,
          Name: `${formArray[index].firstName} ${formArray[index].lastName}`,
          Village: `${formArray[index].village}`,
          status: 'accept',
          Actions: '',
        };
        ELEMENT_DATA.push(objectlikeELEMENT_DATE);
      }

      localStorage.clear();
    }
  }
  displayedColumns: string[] = [
    'position',
    'Name',
    'Village',
    'status',
    'Actions',
  ];
  dataSource: PeriodicElement[] = ELEMENT_DATA;

  condition: boolean = true;

  accept(element: PeriodicElement): void {
    element.status = 'accept';
  }
  reject(element: PeriodicElement): void {
    element.status = 'reject';
  }
  delete(element: PeriodicElement) {
    ELEMENT_DATA.splice(element.position - 1, 1);
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      ELEMENT_DATA[i].position = i + 1;
    }
    this.dataSource = [...ELEMENT_DATA];
  }

  addNew() {
    let Name = prompt('Add a new Akatsuki member named?');
    if (Name != null) {
      ELEMENT_DATA.push({
        position: this.dataSource[this.dataSource.length - 1].position + 1,
        Name: Name,
        Village: 'Unown',
        status: 'reject',
        Actions: '',
      });
      this.dataSource = [...ELEMENT_DATA];
    }
  }
}
