import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  constructor(private _userService:UserService, private route:ActivatedRoute) { }

  details;
  user;
  name;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.user= params.get('user');
      this.name= params.get('name')
      
      this._userService.getRepositoryDetails(this.user,this.name)
      .subscribe(data => {this.details = data,
       console.log(data)})

       console.log(this.user)
      })
    
  }

}
