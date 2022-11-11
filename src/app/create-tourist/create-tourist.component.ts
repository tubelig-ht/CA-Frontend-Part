import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {

  tourist:Tourist=new Tourist();

  constructor(private router:Router,
    private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getPreviousId().subscribe(
      data=>{
        this.tourist.id=data+101;
        console.warn(data);
      },
      error=>{
        Swal.fire('Error in DB','Not Able to communicate with Serve','error');
      }
    );

  }
  registerTourist(){

      this.service.addTourist(this.tourist).subscribe(data=>{
        console.warn(data);
      },error=>{
        Swal.fire('Not Working','Some error in calling service','error');
      });
      Swal.fire('Good Job','Registration Successfull','success').then(
        result=>{
          this.goToViewAllList();
        }
      );
        
    }
  goToViewAllList(){
    this.router.navigate(['viewAll']);
  }
}
