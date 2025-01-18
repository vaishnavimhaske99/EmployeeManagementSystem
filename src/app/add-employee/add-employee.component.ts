import { Component } from '@angular/core';
import { EmployeeserviceService } from '../Service/employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private employeeserve:EmployeeserviceService, private router:Router){}


 

  employeeRegister(Employeeform:any){
    this.employeeserve.addEmployee(Employeeform.value).subscribe(
      (Response)=>{
        console.log(Response);
        this.router.navigate(["/get-employee"]);
      },
      (error1)=>{
        console.log(error1);
      }
    )

  }

}
