import { Component } from '@angular/core';
import { EmployeeserviceService } from '../Service/employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  ngOnInit():void{
    this.getEmp();
  }
constructor(private rout:ActivatedRoute, private router:Router , private empserv:EmployeeserviceService){}

cid=this.rout.snapshot.params[`id`];
  cEmp:any;

updateEmp(data:any){
  return this.empserv.updateEmployee(data.value,this.cid).subscribe(
    (resp)=>{
      console.log(resp);
      this.router.navigate(["/get-employee"]);
    },
    (error)=>{
console.log(error);
    }
    )
  }  
  getEmp(){
    this.empserv.curruntEmp(this.cid).subscribe( 
      (resp)=>{
        this.cEmp=resp;
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
