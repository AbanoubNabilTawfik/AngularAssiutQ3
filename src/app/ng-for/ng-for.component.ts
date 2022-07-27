import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }

  cars=["Tipo","KIA","Sportage","BMW"]
  
  persons=[
    {"id":1, "name":"Ahmed Mohamed"},
    {"id":2,"name":"Mostafa Abdallah"},
    {"id":3,"name":"Salama Mostafa"},
    {"id":4,"name":"Sara Mohamed"}
  ]

  ngOnInit(): void {
  }

}
