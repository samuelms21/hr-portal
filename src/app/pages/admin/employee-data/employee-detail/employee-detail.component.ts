import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EducationBackground } from 'src/app/models/education-background.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  @Input() employeeDetail: Employee | undefined;
  @Input() visible: boolean = false;
  @Output() modalClose = new EventEmitter<string>();

  educationBackground: EducationBackground[] = DUMMY_EDUCATION_BACKGROUND;
  datatableSize: string = 'p-datatable-sm';

  resetModal() {
    console.log('reset modal');
    this.modalClose.emit('reset-modal');
  }
}

const DUMMY_EDUCATION_BACKGROUND: EducationBackground[] = [
  {
    jenjang: 'SD',
    nama_sekolah: 'SD Dummy',
    jurusan: '-',
    tanggal_mulai: '02/02/2023',
    tanggal_kelulusan: '04/02/2023',
    bukti_kelulusan: '#',
    keterangan: 'Nothing to see here.',
  },
  {
    jenjang: 'SMP',
    nama_sekolah: 'SMP Dummy',
    jurusan: '-',
    tanggal_mulai: '02/02/2023',
    tanggal_kelulusan: '04/02/2023',
    bukti_kelulusan: '#',
    keterangan: 'Nothing to see here.',
  },
  {
    jenjang: 'SMA',
    nama_sekolah: 'SMA Dummy',
    jurusan: 'IPA',
    tanggal_mulai: '02/02/2023',
    tanggal_kelulusan: '04/02/2023',
    bukti_kelulusan: '#',
    keterangan: 'Nothing to see here.',
  },
  {
    jenjang: 'S1',
    nama_sekolah: 'Universitas Mantab Jiwa',
    jurusan: 'Teknik Mantap',
    tanggal_mulai: '02/02/2023',
    tanggal_kelulusan: '04/02/2023',
    bukti_kelulusan: '#',
    keterangan: 'Nothing to see here.',
  },
];
