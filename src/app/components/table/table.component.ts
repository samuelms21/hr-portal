import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataCuti } from 'src/app/models/data-cuti.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  datas: DataCuti[] = [];
  dataService = inject(DataService)

  ngOnInit(): void {
    this.datas = this.dataService.getData()
  }
}
