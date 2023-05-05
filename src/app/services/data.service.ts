import { Injectable } from '@angular/core';
import { DataCuti } from '../models/data-cuti.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private requestEndpoint = environment.usersApi;
  private httpOptions = {
    headers: new HttpHeaders({
      'x-access-token': this.cookieService.get(environment.tokenName),
    }),
  };

  constructor(private http: HttpClient, private cookieService: CookieService) {}

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

  getData(): DataCuti[] {
    return this.datas;
  }

  // Retrieve Employee Data (for EmployeeData component)
  getAllEmployeeData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.requestEndpoint, this.httpOptions);
  }

  testGetCookie(): void {
    console.log('From Data service:');
    console.log(this.cookieService.get(environment.tokenName));
  }
}
