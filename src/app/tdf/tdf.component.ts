import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { User } from '../User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private userService:UserService) { }

  topics=["Angular","React","Vue"]
  topicHasError:boolean=false;

  userModel:User= new User("","","abnabil@iti.gov.eg","",true);

  ngOnInit(): void {
  }

  validateTopic(topicValue:any)
  {
    if(topicValue==='default')
    {
      this.topicHasError=true;
    }
    else
    {
      this.topicHasError=false;
    }
  }

  postData()
  {
   this.userService.postData(this.userModel);
  }

}
