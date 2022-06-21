import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-form-new-shinobi',
  templateUrl: './form-new-shinobi.component.html',
  styleUrls: ['./form-new-shinobi.component.css'],
})
export class FormNewShinobiComponent {
  villages = [
    'Konohagakure',
    'Kumogakure',
    'Iwagakure',
    'Sunagakure',
    'Amegakure',
    'Kirigakure',
    'Uzushiogakure',
  ];
  selectedVillage = this.villages[1];

  Sex: 'male' | 'female' = 'male';

  newShinobiFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.newShinobiFormGroup = this.formBuilder.group({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      village: new FormControl('', Validators.required),
      sex: new FormControl(''),
      textarea: new FormControl(''),
    });
  }

  onClear() {
    this.newShinobiFormGroup.reset();
    this.hiddenObject = false;
  }
  public hiddenObject = false;
  onView() {
    this.hiddenObject = true;
  }
  onSave() {
    if (localStorage['formArray']) {
      let newformArray = JSON.parse(localStorage['formArray']);
      newformArray.push(this.newShinobiFormGroup.value);
      localStorage.removeItem('formArray');
      localStorage['formArray'] = JSON.stringify(newformArray);
    } else {
      let formArray = [this.newShinobiFormGroup.value];
      localStorage['formArray'] = JSON.stringify(formArray);
    }
  }

  // newShinobi = new Shinobi('Naruto', this.villages[0]);

  // submitted = false;
}
