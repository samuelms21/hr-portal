import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent implements OnInit {
  employeeData: Employee[] = [];
  selectedEmployees: Employee | undefined;

  currentEmployeeDetail: Employee | undefined;
  showEmpDetailModal: boolean = false;

  showAddEditEmpDataPage: boolean = false;

  datatableSize: string = 'p-datatable-sm';

  @ViewChild('dt1') dt1: Table | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllEmployeeData();
  }

  showEmployeeDetail(nip: string) {
    let employee = this.employeeData.find((emp) => {
      return emp.nip === nip;
    });
    if (employee !== undefined) {
      this.currentEmployeeDetail = employee;
      this.showEmpDetailModal = true;
      console.log(this.currentEmployeeDetail);
      console.log(this.showEmpDetailModal);
    }
  }

  closeModal(event: String) {
    if (event === 'reset-modal') {
      this.showEmpDetailModal = false;
      return;
    }
  }

  getAllEmployeeData() {
    this.dataService.getAllEmployeeData().subscribe({
      next: (response) => {
        this.employeeData = response;
        // console.log(this.employeeData);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.status);
        console.log(error.message);
      },
    });
  }

  addEmployee() {
    console.log('Adding new employee');
    this.showAddEditEmpDataPage = true;
  }

  applyFilterGlobal(event: Event, stringVal: any) {
    this.dt1!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}
