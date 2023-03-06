import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {

  allData:any = []
  searchKey:string = ''

  constructor(private api:ApiService) {

  }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    this.api.allUsers().subscribe((result:any)=>{
      console.log(result);
      this.allData = result.users
    })
  }

}
