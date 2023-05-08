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

  employeeDataForm = new FormGroup({
    enterDate: new FormControl<Date | null>(null),
    resignDate: new FormControl<Date | null>(null),
  });

  onSubmit() {}
}
