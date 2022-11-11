import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {

  touristList!:Tourist[];

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getAllTourists().subscribe(
      data=>{
        this.touristList=data;
      },
      error=>{
        window.alert(error);
      }
    );
  }



}
