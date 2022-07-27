import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  @ViewChild(ChildComponent) child :ChildComponent;

  fullName:string="Hello child from parent";
  age:number=50;

  dataFromChild:any;

  ngOnInit(): void {
    // this.child.whoAmI();
  }

  ngAfterViewInit()
  {
    this.child.whoAmI();
  }

}
