import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
})
export class AddEditEmployeeComponent {
  @Input() selectedForm = 'Default Title';
  profilePictureURL: string | undefined | null;

  selectedEmpPhoto: File;
  levels: { level: number; display: string }[] = LEVELS;

  employeeDataForm = new FormGroup({
    enterDate: new FormControl<Date | null>(null),
    resignDate: new FormControl<Date | null>(null),
    NIP: new FormControl<string | null>(null),
    firstName: new FormControl<string | null>(null),
    middleName: new FormControl<string | null>(null),
    lastName: new FormControl<string | null>(null),
    displayName: new FormControl<string | null>(null),
    division: new FormControl<string | null>(null),
    position: new FormControl<string | null>(null),
    level: new FormControl<string | null>(null),
    birthPlace: new FormControl<string | null>(null),
    birthDate: new FormControl<Date | null>(null),
    address: new FormControl<string | null>(null),
    addressProvince: new FormControl<string | null>(null), // provinsi
    addressCity: new FormControl<string | null>(null), // kota
    addressSubdistrict: new FormControl<string | null>(null), // kecamatan
    addressWard: new FormControl<string | null>(null), // keluarahan
  });

  onPhotoUpload(event: any) {
    if (event.target.files.length > 0) {
      this.selectedEmpPhoto = event.target.files[0];
    } else {
      alert('File not valid.');
    }
  }

  onSubmit() {
    console.log(this.employeeDataForm);
    console.log(this.selectedEmpPhoto);
  }
}

const LEVELS: { level: number; display: string }[] = [
  { level: 1, display: 'Level 1' },
  { level: 2, display: 'Level 2' },
  { level: 3, display: 'Level 3' },
  { level: 4, display: 'Level 4' },
  { level: 5, display: 'Level 5' },
  { level: 6, display: 'Level 6' },
  { level: 7, display: 'Level 7' },
];
