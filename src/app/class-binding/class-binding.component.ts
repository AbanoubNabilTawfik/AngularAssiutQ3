import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  textColor:string="text-success"
  hasError:boolean=false;
  hasSpecial:boolean=true;

  messageClasses={
    "text-danger":this.hasError,
    "text-success":!this.hasError,
    "text-special":this.hasSpecial
  }

  ngOnInit(): void {
  }

}
