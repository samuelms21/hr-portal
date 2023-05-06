import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  @Input() employeeDetail: Employee | undefined;
  @Input() visible: boolean = false;
  @Output() modalClose = new EventEmitter<string>();

  resetModal() {
    console.log('reset modal');
    this.modalClose.emit('reset-modal');
  }
}
