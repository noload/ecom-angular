import { Component } from '@angular/core';

@Component({
  selector: 'app-for-track',
  templateUrl: './for-track.component.html',
  styleUrl: './for-track.component.css'
})
export class ForTrackComponent {

  public emps:any[]=[
    {empId:101,empName:"Vaibhav",salary:20000},
    {empId:102,empName:"Ramesh",salary:20000},
    {empId:103,empName:"Suresh",salary:20000},
    {empId:104,empName:"Rakesh",salary:20000}

  ]
  getUpdatedData(){
    this.emps=[
      {empId:101,empName:"Vaibhav",salary:20000},
      {empId:102,empName:"Ramesh",salary:20000},
      {empId:103,empName:"Suresh",salary:20000},
      {empId:104,empName:"Rakesh",salary:20000},
      {empId:104,empName:"Nilesh",salary:20000}
      
    ]
  }
  public TrackChanges(index:number){
    return index
  }
}
