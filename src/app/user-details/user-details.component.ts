
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _userService:UserService, private route:ActivatedRoute) { }

  details;
  userRepos;
  user;
  totalRec;
  page;
  
  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.user= params.get('name');
      
      this._userService.getUserDetails(this.user)
      .subscribe(data => {this.details = data,
       console.log(data)})

       console.log(this.user)
       this._userService.getUserRepos(this.user)
      .subscribe(data => {this.userRepos = data,
       console.log(data)})

       console.log(this.userRepos)
      
    
    })
    
    
    }

}
