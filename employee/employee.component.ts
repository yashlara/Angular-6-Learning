
import {Component, OnInit} from '@angular/core';
import {ngForm} from '@angular/forms';

@Component({
    selector : 'my-employee',
    templateUrl : './employee.component.html',
    styleUrls : ['./employee.component.css']
   
})

export class EmployeeComponent implements OnInit{

    Education=["Middle School","High School","Bachelors", "Masters", "PhD", "Post Doctorate"];

    age= [];

    
    constructor(){}

    
    ngOnInit(){}

    saveEmployee(empForm: ngForm) : void {
        console.log(empForm.value);
    }
   
   
}