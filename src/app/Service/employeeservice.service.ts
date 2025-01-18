import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  baseUrl="http://localhost:3000";
  constructor(private http:HttpClient) { }

  public addEmployee(employeeData:any){
    return this.http.post(this.baseUrl+'/Employees' ,employeeData);
      }
      public getEmployee(){
       return this.http.get(this.baseUrl+'/Employees');
      }
      public deleteEmloyee(id:any){
        return this.http.delete(this.baseUrl+`/Employees/${id}`)
      }
      public curruntEmp(id:any){
        return this.http.get(this.baseUrl+`/Employees/${id}`)
      }

      public updateEmployee(userData:any ,id:any){
        return this.http.put(this.baseUrl+`/Employees/${id}`, userData)
      }
}
