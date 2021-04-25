import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users;
  repos;
  public errorMsg;
  username ;
  totalRec : number;
  page: number = 1;

  constructor(private _userService:UserService, private router:Router) { 
    
  }
  
  ngOnInit(): void {

  }
   

   getData(username,type){
   if(type=='users'){
    this._userService.getUsers(username)
     .subscribe(data => {this.users = data,
      console.log(data)
      this.totalRec=this.users.items.length
    },
      error => this.errorMsg = error.message)
   }
   else{
    this._userService.getRepos(username)
    .subscribe(data => {this.repos = data,
     console.log(data)
     this.totalRec=this.users.items.length
   },
     error => this.errorMsg = error.message)
   }
 
  
}
  
onSelect(user){

  this.router.navigate(['/user',user])
}
onClick(user,repo){
  this.router.navigate(['/repo',user,repo])
}
}
