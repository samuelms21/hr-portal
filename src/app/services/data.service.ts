import { Injectable } from '@angular/core';
import { DataCuti } from '../models/data-cuti.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  datas: DataCuti[] = [
    {
      nama: 'Test1',
      noCuti: 'IDX123',
      tanggalAkhir: new Date('12/12/2020'),
      tanggalAwal: new Date('12/12/2020'),
      tanggalPengajuan: new Date('12/12/2020'),
    },
    {
      nama: 'Test2',
      noCuti: 'IDX123',
      tanggalAkhir: new Date('12/12/2020'),
      tanggalAwal: new Date('12/12/2020'),
      tanggalPengajuan: new Date('12/12/2020'),
    },
    {
      nama: 'Test3',
      noCuti: 'IDX123',
      tanggalAkhir: new Date('12/12/2020'),
      tanggalAwal: new Date('12/12/2020'),
      tanggalPengajuan: new Date('12/12/2020'),
    },
    {
      nama: 'Test4',
      noCuti: 'IDX123',
      tanggalAkhir: new Date('12/12/2020'),
      tanggalAwal: new Date('12/12/2020'),
      tanggalPengajuan: new Date('12/12/2020'),
    },
  ];

  getData() : DataCuti[] {
    return this.datas
  }
}
