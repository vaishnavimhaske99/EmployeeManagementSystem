import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeserviceService } from '../Service/employeeservice.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
addEmp(arg0: any) {
throw new Error('Method not implemented.');
}
updateEmp(arg0: any) {
throw new Error('Method not implemented.');
}
  employeeArray: any;

  deleteEmployee(id:any){
    if(confirm(`Do you want to delete $id record`))
      this.employees.deleteEmloyee(id).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }
  )
    
  }

  constructor(private employees: EmployeeserviceService, private router:Router) {}

  addEmp1(id:any){
    this.router.navigate([`/add-employee`]);
  }

  update(id:any){
    this.router.navigate([`/update-employee/${id}`]);
  }

  ngOnInit() {
    this.getEmployeedetail();
  }
  p:any;

  getEmployeedetail() {
    this.employees.getEmployee().subscribe(
      (resp: any) => {
        this.employeeArray = resp;
        console.log("Employee Data:", this.employeeArray);  // Debugging line
      },
      (err) => {
        console.log("Error fetching data:", err);
      }
    );
  }}
